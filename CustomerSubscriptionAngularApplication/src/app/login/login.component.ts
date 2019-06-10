import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import swal from 'sweetalert2';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  data: any;

  constructor(private router: Router, private http: HttpClient) { 
    this.data = {"email": "", password: ""};
  }

  ngOnInit() {
    this.data = {"email": "", "password": ""};
  }

  public logIn(){

    if((this.data.email.localeCompare("") === 0) || (this.data.password.localeCompare("") === 0)){
      this.displayErrorMessage('Error Signing up', 'PLease ensure all fields are filled');
      return;
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(this.data.email + ':' + this.data.password)
      })
    };

    let result = this.http.get(UtilsService.API_URL + '/login', httpOptions);

    result.subscribe(response => {
      console.log(response);
      if('token' in response){
        this.displaySuccessfullSignInAlert();
        this.router.navigate(['/customerlisting']);
      }
      else{
        this.displayErrorMessage('Error', 'Error signing in');
        
      }
    })
  }

  public displaySuccessfullSignInAlert(){
    const toast = swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000
    });
    
    toast.fire({
      type: 'success',
      title: 'Signed in successfully'
    })
  }
  public displayErrorMessage(errorTitle : string, errorText: string){
    swal.fire({
      type: 'error',
      title: errorTitle,
      text: errorText
    });
  }

}


