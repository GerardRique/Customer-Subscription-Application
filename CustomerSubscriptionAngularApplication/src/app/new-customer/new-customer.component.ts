import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styleUrls: ['./new-customer.component.scss']
})
export class NewCustomerComponent implements OnInit {

  customer: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.customer = {
      "firstName": "",
      "lastName": "",
      "email": "",
      "contactNumber": ""
    };
  }

  public createCustomer(){
    console.log(this.customer);

    let postData = {
      'first_name': this.customer.firstName,
      'last_name': this.customer.lastName,
      'email': this.customer.email,
      'phone_number': this.customer.contactNumber
    };

    let result = this.http.post("http://127.0.0.1:5000/customer", postData);

    result.subscribe((response) => {
      console.log(response);
    })
  }

}
