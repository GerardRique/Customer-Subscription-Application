import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  mySignUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.mySignUpForm = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  public signUp(){
    let email = this.mySignUpForm.value.email;
    let password = this.mySignUpForm.value.password;

    console.log(email);
    console.log(password);
  }

}
