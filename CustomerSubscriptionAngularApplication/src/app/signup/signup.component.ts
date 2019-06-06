import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
      password: this.data.email
    };

    let headers = new Headers({'Content-Type': 'application/json'});
    // let options = new RequestOp

    let result = this.http.post("http://127.0.0.1:5000/signup", post_data);

    result.subscribe(response => {
      console.log(response);
    })
  }

}
