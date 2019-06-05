from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import datetime
import os
import uuid
from werkzeug.security import generate_password_hash, check_password_hash



app = Flask(__name__)

app.config['SECRET_KEY'] = 'gerardsecret'
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://admin:Vo8HGsZqQ0qb9ums@localhost/admin'

db = SQLAlchemy(app)


class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('customer.id'), nullable=False)
    service_id = db.Column(db.Integer, db.ForeignKey('service.id'), nullable=False)
    active = db.Column(db.Boolean, default=True, nullable=False)
    date_subscribed = db.Column(db.DateTime, default=datetime.datetime.utcnow, nullable=False)
    date_unsubscribed = db.Column(db.DateTime, nullable=True)

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







@app.route('/customer', methods=['GET'])
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
def create_service():
    data = request.get_json()
    new_service = Service(name=data['name'], price=data['price'])
    db.session.add(new_service)
    db.session.commit()
    return jsonify({'status': 200, 'message':'Service successfully created'})

@app.route('/service/<id>', methods=['GET'])
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
def subscribe_customer():
    data = request.get_json()
    new_subscription = Subscription(customer_id=data['customer_id'], service_id=data['service_id'])
    db.session.add(new_subscription)
    db.session.commit()
    return jsonify({'status': 200, 'message':'User successfully subscribed to service'})

@app.route('/subscribe/<customer_id>', methods=['GET'])
def get_subscriptions(customer_id):
    customer = Customer.query.get(customer_id)
    subscriptions = customer.subscriptions
    result = []
    
    for service in subscriptions:
        service_data = {}
        service_data['id'] = service.id
        service_data['name'] = service.name
        service_data['price'] = service.price
        result.append(service_data)


    return jsonify({'status': 200, 'services': result})

if __name__=='__main__':
    app.run(debug=True)