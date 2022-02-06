import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILogin } from '../login';
import { AuthService } from '../services/auth.service'
import { TokenStorageService } from './../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService,private tokenStorage: TokenStorageService) { }

  model: ILogin = { email: "teo99@live.fr", password: "admin@123" }

  private email: string = "";
  private password: string = "";
  public signinForm = this.formBuilder.group({});
  private message: string = "";
  private returnUrl: string = "";

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];


  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    this.signinForm=this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
    this.returnUrl = '/store';
    this.tokenStorage.signOut();
  }

  submit() {
    if (this.signinForm.invalid) {
      this.message = "Please check your userid and password";
      return;
    }
    else {
      var email=this.signinForm.get('email')?.value;
      var password=this.signinForm.get('password')?.value;
      this.authService.login(email, password).subscribe(
        data => {
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser(data);

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          this.reloadPage();
          localStorage.setItem('isLoggedIn','true');
          this.router.navigate([this.returnUrl]);
        },
        err => {
          localStorage.setItem('isLoggedIn','false');
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
    }
    reloadPage(): void {
      window.location.reload();
    }
  }

