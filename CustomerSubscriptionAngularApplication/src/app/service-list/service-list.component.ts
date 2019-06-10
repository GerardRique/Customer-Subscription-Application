import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UtilsService } from '../utils.service';


@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.scss']
})
export class ServiceListComponent implements OnInit {

  services: Array<Object>;

  constructor(private router: Router, private http: HttpClient) {
    this.services = Array<Object>();
   }

  ngOnInit() {
    let result = this.http.get(UtilsService.API_URL + "/service");

    result.subscribe((response) => {
      console.log(response);
      if(response['status'] === 200){
        this.services = response['services'];
        console.log(this.services);
      }
    })
  }

}
