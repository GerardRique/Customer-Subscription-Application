import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


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
    let result = this.http.get("http://127.0.0.1:5000/customer");

    result.subscribe((response) => {
      this.customers = response['customers'];
      console.log(this.customers);
    })
  }

  goToEditPage(id){
    let editRoute = '/edit/' + id;
    this.router.navigate(['/edit', id]);
  }

}
