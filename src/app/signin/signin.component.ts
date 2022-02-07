import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from './../services/token-storage.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService
  ) {}

  private email: string = '';
  private password: string = '';
  public signinForm = this.formBuilder.group({});
  private message: string = '';
  private returnUrl: string = '';

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.router.navigate(['/store']);
    }
    this.signinForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
    this.returnUrl = '/store';
    //this.tokenStorage.signOut();
  }

  submit() {
    if (this.signinForm.invalid) {
      this.message = 'Please check your email and password';
      return;
    } else {
      var email = this.signinForm.get('email')?.value;
      var password = this.signinForm.get('password')?.value;
      this.authService.login(email, password).subscribe(
        (data) => {
          console.log({ data });
          this.tokenStorage.saveToken(data.accessToken);
          this.tokenStorage.saveUser({
            id: data.id,
            username: data.username,
            email: data.email,
            roles: data.roles,
          });

          this.isLoginFailed = false;
          this.isLoggedIn = true;
          this.roles = this.tokenStorage.getUser().roles;
          console.log({ roles: this.roles });
          localStorage.setItem('isLoggedIn', 'true');
          this.roles.includes('ROLE_ADMIN')
            ? localStorage.setItem('isAdmin', 'true')
            : localStorage.setItem('isAdmin', 'false');
          this.router.navigate([this.returnUrl]);
          window.location.reload();
        },
        (err) => {
          localStorage.setItem('isAdmin', 'false');
          localStorage.setItem('isLoggedIn', 'false');
          this.errorMessage = err.error.message;
          this.isLoginFailed = true;
        }
      );
    }
  }
}
