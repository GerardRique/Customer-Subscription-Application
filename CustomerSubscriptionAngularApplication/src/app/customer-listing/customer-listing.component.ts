import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {

  customers: Array<Object>;

  constructor(private router: Router, private http: HttpClient) { 
    this.customers = Array<Object>();
  }

  ngOnInit() {
    let result = this.http.get(UtilsService.API_URL + "/customer");

    result.subscribe((response) => {
      this.customers = response['customers'];
      console.log(this.customers);
    })
  }

  goToEditPage(id){
    let editRoute = '/edit/' + id;
    this.router.navigate(['/edit', id]);
  }
  createCustomerPage(){
    this.router.navigate(['/newcustomer']);
  }

}
