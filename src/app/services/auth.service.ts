import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable} from 'rxjs';
import { ILogin } from '../login';
import { HttpClient,HttpHeaders } from '@angular/common/http';

const AUTH_API = 'http://localhost:8090/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})export class AuthService {
  constructor(private http:HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username:email,
      password
    }, httpOptions);
  }

  register( email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username:email,
      email,
      password
    }, httpOptions);
  }
}