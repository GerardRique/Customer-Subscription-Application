import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { UtilsService } from '../utils.service';

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
      let result = this.http.get(UtilsService.API_URL + "/service");

      result.subscribe((response) => {
        this.serviceListing = response['services'];
        console.log(this.serviceListing)

        this.http.get(UtilsService.API_URL + "/subscribe/" + this.customerId).subscribe((serviceResponse) => {
          this.customerServices = serviceResponse['services']
          console.log(this.customerServices);

          for(let service of this.serviceListing){
            let currentId = service['id'];
            let found = false;

            for (let userService of this.customerServices){
              if(currentId === userService['service_id'])
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

  unsubscribe(serviceId){
    let postData = {
      'customer_id': this.customerId,
      'service_id': serviceId
    };
    console.log('Unsubscribing');

    this.http.post(UtilsService.API_URL + "/unsubscribe", postData).subscribe((response) => {
      console.log(response);
      if(response['status'] === 200){
        this.displaySuccessfullAlert('Successfully subscribed new service');
        this.router.navigate(['/edit', this.customerId]);
      }
      else{
        this.displayErrorMessage('Subscription Error', 'Error adding subscription')
      }
    })
  }

  subscribe(serviceId){
    let postData = {
      'customer_id': this.customerId,
      'service_id': serviceId
    };

    this.http.post(UtilsService.API_URL + "/subscribe", postData).subscribe((response) => {
      console.log(response);
      if(response['status'] === 200){
        this.displaySuccessfullAlert('Successfully subscribed new service');
        this.router.navigate(['/edit', this.customerId]);
      }
      else{
        this.displayErrorMessage('Subscription Error', 'Error adding subscription')
      }
    })
  }

  public displaySuccessfullAlert(message: string){
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    toast.fire({
      type: 'success',
      title: message
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
