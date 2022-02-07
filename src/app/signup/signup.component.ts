import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService}from '../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService:AuthService, private router: Router) { }

  private returnUrl: string = "";
  private email: string = "";
  private password: string = "";
  Data: Array<any> = [
    { name: 'admin', value: 'admin' },
    { name: 'user', value: 'user' }
  ];

  signupForm = this.formBuilder.group({
    email: this.email,
    password:this.password,
    checkArray: this.formBuilder.array([])
  });

    isSuccessful = false;
    isSignUpFailed = false;
    errorMessage = '';

    ngOnInit(): void {
      this.returnUrl = '/signin';
    }

    onCheckboxChange(e:any) {
      const checkArray: FormArray = this.signupForm.get('checkArray') as FormArray;
      if (e.target.checked) {
        checkArray.push(new FormControl(e.target.value));
      } else {
        let i: number = 0;
        checkArray.controls.forEach((item: any) => {
          if (item.value == e.target.value) {
            checkArray.removeAt(i);
            return;
          }
          i++;
        });
      }
    }
    onSubmit(): void {
      let email = this.signupForm.get('email')?.value;
      let password = this.signupForm.get('password')?.value;
      let role = this.signupForm.get('checkArray')?.value
      console.log({role})
      this.authService.register( email, password, role).subscribe(
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
      this.router.navigate([this.returnUrl]);
    }
  }

