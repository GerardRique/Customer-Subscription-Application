import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  data: any;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.data = {"email": "", password: ""};
  }

  public signUp(){
    console.log(this.data.email)
    console.log(this.data.password)

    let post_data = {
      email: this.data.email,
      password: this.data.password
    };

    let headers = new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOp

    let result = this.http.post(UtilsService.API_URL + "/signup", post_data);

    result.subscribe(response => {
      console.log(response);
      if(response['status'] === 200){
        this.displaySuccessfullSignInAlert();
        this.router.navigate(['/customerlisting']);
      }
      else{
        this.displayErrorMessage('Error signing in.', 'PLease Try again');
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
