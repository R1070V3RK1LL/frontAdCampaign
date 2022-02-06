import { Component, OnInit } from '@angular/core';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {AuthService}from '../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService:AuthService) { }

  private email: string = "";
  private password: string = "";

  signupForm = this.formBuilder.group({
    email: this.email,
    password:this.password,
  });

    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    ngOnInit(): void {
    }

    onSubmit(): void {
      var email=this.signupForm.get('email')?.value;
      var password=this.signupForm.get('password')?.value;
      this.authService.register( email, password).subscribe(
        data => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        err => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
    }
  }

