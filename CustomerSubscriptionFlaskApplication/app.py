from flask import Flask, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship, backref
from sqlalchemy import update
from flask_login import LoginManager
import datetime
import os
import uuid
from werkzeug.security import generate_password_hash, check_password_hash
import jwt

from functools import wraps


app = Flask(__name__)
cors = CORS(app)

app.config['SECRET_KEY'] = 'gerardsecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://gerard:gerardpass1@gerardcustomersubscription.cfmqsbqtrhb4.us-east-2.rds.amazonaws.com/gerard'
app.config['CORS_HEADERS'] = 'Content-Type'


db = SQLAlchemy(app)



# subscription = db.Table('subscription', 
#     db.Column('customer_id', db.Integer, db.ForeignKey('customer.id')),
#     db.Column('service_id', db.Integer, db.ForeignKey('service.id')),
#     db.Column('active', db.Boolean, default=True, nullable=False),
#     db.Column('date_subscribed', db.DateTime, default=datetime.datetime.utcnow, nullable=False),
#     db.Column('date_unsubscribed', db.DateTime, nullable=True)
# )

class Customer(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), nullable=False)
    last_name = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False)
    phone_number = db.Column(db.String(8), nullable=False)
    subscriptions = db.relationship('Service', secondary='subscription', backref= db.backref('subscribers', lazy='dynamic'))

class Service(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    price = db.Column(db.Float, nullable=False)

class Agent(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(100), nullable=False)
    password = db.Column(db.String(100), nullable=False)

class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    active = db.Column(db.Boolean, default=True, nullable=False)
    date_subscribed = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    date_unsubscribed = db.Column(db.DateTime, nullable=True)
    customer = relationship(Customer, backref=backref("customer_assoc"))
    service = relationship(Service, backref=backref("service_assoc"))



def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'mesage': 'Token is missing'}), 401
        
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = Agent.query.get(data['id'])
        except:
            return jsonify({'message': 'Token is invalid'}), 401

        return f(current_user, *args, **kwargs)

    return decorated


@app.route('/customer', methods=['GET'])
@cross_origin()
def get_all_customers():
    customers = Customer.query.all()
    result = []

    for customer in customers:
        customer_data = {}
        customer_data['id'] = customer.id
        customer_data['first_name'] = customer.first_name
        customer_data['last_name'] = customer.last_name
        customer_data['email'] = customer.email
        customer_data['phone_number'] = customer.phone_number
        result.append(customer_data) 

    return jsonify({'customers': result})

@app.route('/customer/<id>', methods=['GET'])
@cross_origin()
def get_customer(id):
    customer = Customer.query.get(id)

    if not customer:
        return jsonify({'staus': 404, 'message': 'Customer Not Found'})

    customer_data = {}
    customer_data['first_name'] = customer.first_name
    customer_data['last_name'] = customer.last_name
    customer_data['email'] = customer.email
    customer_data['phone_number'] = customer.phone_number

    return jsonify({'status': 200, 'customer': customer_data})

@app.route('/customer', methods=['POST'])
@cross_origin()
def create_customer():
    data = request.get_json()
    new_customer = Customer(first_name=data['first_name'], last_name = data['last_name'], email=data['email'], phone_number=data['phone_number'])
    db.session.add(new_customer)
    db.session.commit()
    return jsonify({'status': 200, 'message':'Customer successfully created'})

@app.route('/customer/<customer_id>', methods=['PUT'])
def update_customer():
    return ''


@app.route('/service', methods=['GET'])
@cross_origin()
def get_all_services():
    services = Service.query.all()
    result = []

    for service in services:
        service_data = {}
        service_data['id'] = service.id
        service_data['name'] = service.name
        service_data['price'] = service.price
        result.append(service_data)
    
    return jsonify({'status': 200, 'services': result})

@app.route('/service', methods=['POST'])
@cross_origin()
def create_service():
    data = request.get_json()
    new_service = Service(name=data['name'], price=data['price'])
    db.session.add(new_service)
    db.session.commit()
    return jsonify({'status': 200, 'message':'Service successfully created'})

@app.route('/service/<id>', methods=['GET'])
@cross_origin()
def get_service(id):
    service = Service.query.get(id)

    if not service:
        return jsonify({'staus': 404, 'message': 'Service Not Found'})
    
    service_data = {}
    service_data['id'] = service.id
    service_data['name'] = service.name
    service_data['price'] = service.price

    return jsonify({'status': 200, 'service': service_data})

@app.route('/subscribe', methods=['POST'])
@cross_origin()
def subscribe_customer():
    data = request.get_json()
    new_subscription = Subscription(customer_id=data['customer_id'], service_id=data['service_id'])
    db.session.add(new_subscription)
    db.session.commit()
    return jsonify({'status': 200, 'message':'User successfully subscribed to service'})

@app.route('/unsubscribe', methods=['POST'])
@cross_origin()
def unsubscribe_customer():
    data = request.get_json()
    my_customer_id = data['customer_id']
    my_service_id = data['service_id']

    data = Subscription.query.filter_by(service_id=my_service_id).filter_by(customer_id=my_customer_id).filter_by(active=True).first()
    # result = update(Subscription).where(Subscription.customer_id = my_customer_id).values(active=False)
    if data != None:
        print(data)
        data.date_unsubscribed=datetime.datetime.now()
        data.active=False
        db.session.commit()
        return jsonify({'status': 200, 'message':'User successfully un-subscribed to service'})
    else:
        print("User not subscribed to this service")

    return jsonify({'status': 200, 'message':'Server Error'})

    


@app.route('/subscribe/<customer_id>', methods=['GET'])
@cross_origin()
def get_subscriptions(customer_id):
    customer = Customer.query.get(customer_id)

    ref = Subscription.query.join(Customer).join(Service)
    for data in ref:
        print(data.customer.first_name)
        print(data.active)

    subscriptions = customer.subscriptions
    result = []

    for subscription in ref:
        service_data = {}
        service_data['id'] = subscription.id
        service_data['service_id'] = subscription.service.id
        service_data['service_price'] = subscription.service.price
        service_data['service_name'] = subscription.service.name
        service_data['date_subscribed'] = subscription.date_subscribed
        result.append(service_data)



    return jsonify({'status': 200, 'services': result})

@app.route('/signup', methods=['POST'])
@cross_origin()
def sign_up():
    request_data = request.get_json()

    hashed_password = generate_password_hash(request_data['password'], method='sha256')
    print(hashed_password)

    new_agent = Agent(email=request_data['email'], password=hashed_password)
    db.session.add(new_agent)
    db.session.commit()

    return jsonify({'status': 200, 'message': 'Agent Successfully created'})


@app.route('/login')
@cross_origin()
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        return make_response('Could not Authenticate 1', 401, {'WWW-Authenicate': 'Basic realm="Login required!"'})

    agent = Agent.query.filter_by(email=auth.username).first()

    if not agent:
        return make_response('Could not Authenticate 2', 401, {'WWW-Authenicate': 'Basic realm="Agent not found!"'})

    print(agent.email)
    print(agent.password)

    if check_password_hash(agent.password, auth.password):
        token = jwt.encode({'id': agent.id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])
        return jsonify({'token': token.decode('UTF-8')})

    return make_response('Could not Authenticate 3', 401, {'WWW-Authenticate' : 'Basic realm="Login required!"'})


if __name__=='__main__':
    app.run(host="0.0.0.0", port=443)