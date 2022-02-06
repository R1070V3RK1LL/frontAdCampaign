import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../login';
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService) { }

  model: ILogin = { email: "teo99@live.fr", password: "admin@123" }
  private email: string = "";
  private password: string = "";
  public signinForm = this.formBuilder.group({});
  private message: string = "";
  private returnUrl: string = "";



  ngOnInit(): void {
    this.signinForm=this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
    this.returnUrl = '/store';
    this.authService.logout();
  }

  submit() {
    if (this.signinForm.invalid) {
      return;
    }
    else {
      if (this.signinForm.get('email')?.value == this.model.email && this.signinForm.get('password')?.value == this.model.password) {
        //this.authService.authLogin(this.model);
        localStorage.setItem('isLoggedIn', "true");
        localStorage.setItem('token', this.signinForm.get('email')?.value);
        this.router.navigate([this.returnUrl]);
      }
      else {
        this.message = "Please check your userid and password";
      }
    }
  }
}
