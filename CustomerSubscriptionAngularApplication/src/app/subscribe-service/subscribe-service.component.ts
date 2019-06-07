import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscribe-service',
  templateUrl: './subscribe-service.component.html',
  styleUrls: ['./subscribe-service.component.scss']
})
export class SubscribeServiceComponent implements OnInit {

  services: Array<Object>;
  customerServices: Array<Object>;
  customerId: string;
  serviceListing: Array<Object>;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {
    this.services = Array<Object>();
    this.customerServices = Array<Object>();
    this.customerId = "";
    this.serviceListing = Array<Object>();
   }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.customerId = params['id'];
      let result = this.http.get("http://127.0.0.1:5000/service");

      result.subscribe((response) => {
        this.serviceListing = response['services'];
        console.log(this.serviceListing)

        this.http.get("http://127.0.0.1:5000/subscribe/" + this.customerId).subscribe((serviceResponse) => {
          this.customerServices = serviceResponse['services']
          console.log(this.customerServices);

          for(let service of this.serviceListing){
            let currentId = service['id'];
            let found = false;

            for (let userService of this.customerServices){
              if(currentId === userService['id'])
                found = true;
                service['subscribed'] = true;
            }
            if(found === false)
              service['subscribed'] = false;
          }

          console.log(this.serviceListing);
        })
      })
    })
  }

  subscribe(serviceId){
    let postData = {
      'customer_id': this.customerId,
      'service_id': serviceId
    };

    this.http.post("http://127.0.0.1:5000/subscribe", postData).subscribe((response) => {
      console.log(response);
    })
  }

}
