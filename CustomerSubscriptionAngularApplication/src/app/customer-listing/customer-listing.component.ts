import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-customer-listing',
  templateUrl: './customer-listing.component.html',
  styleUrls: ['./customer-listing.component.scss']
})
export class CustomerListingComponent implements OnInit {

  customers: Array<Object>;
  customerFullList: Array<Object>;
  searchText: string;
  searchControl: FormControl;

  constructor(private router: Router, private http: HttpClient) { 
    this.customers = Array<Object>();
    this.customerFullList = Array<Object>();
    this.searchText = "";
    this.searchControl = new FormControl();

  }

  ngOnInit() {
    let result = this.http.get(UtilsService.API_URL + "/customer");

    result.subscribe((response) => {
      this.customers = response['customers'];
      this.customerFullList = response['customers'];
      console.log(this.customers);
    })

    this.searchControl.valueChanges.subscribe((search) => {
      this.customers = this.filterCustomers(search);
    });
  }

  goToEditPage(id){
    let editRoute = '/edit/' + id;
    this.router.navigate(['/edit', id]);
  }
  createCustomerPage(){
    this.router.navigate(['/newcustomer']);
  }

  filterCustomers(searchValue: string){
    console.log(searchValue);
    console.log(this.customers);
    return this.customerFullList.filter((customer) => {
      return customer['first_name'].toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
    })
  }

}
