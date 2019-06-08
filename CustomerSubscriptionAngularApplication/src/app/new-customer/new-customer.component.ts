import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { UtilsService } from '../utils.service';

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

    let result = this.http.post(UtilsService.API_URL + "/customer", postData);

    result.subscribe((response) => {
      console.log(response);
      if(response['status'] === 200){
        this.displaySuccessfullAlert();
        this.router.navigate(['/customerlisting']);
      }
      else{
        this.displayErrorMessage('Error creating customer', 'Please try again');
      }
    })
  }

  public displaySuccessfullAlert(){
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    toast.fire({
      type: 'success',
      title: 'Successfully created new customer'
    })
  }

  public displayErrorMessage(titleString: string, textString: string){
    swal.fire({
      title: titleString,
      text: textString,
      type: 'error',
      confirmButtonText: 'cool'
    });
  }

}
