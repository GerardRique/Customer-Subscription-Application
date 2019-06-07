import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  services: Array<Object>;
  subscribedToServices: boolean;
  customerId: string;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { 
    this.services = Array<Object>();
    this.subscribedToServices = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params);
      let id = params['id'];
      this.customerId = params['id'];
      let result = this.http.get("http://127.0.0.1:5000/subscribe/" + id);

      result.subscribe((response) => {
        this.services = response['services'];
        if(this.services.length > 0)
          this.subscribedToServices = true;
        else this.subscribedToServices = false;
      })

    })
  }

  goToSubscribePage(){
    this.router.navigate(['/subscribe', this.customerId]);
  }

}
