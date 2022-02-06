import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public id: string|null;
  constructor(private router: Router, private authService: AuthService) {this.id="";}
  ngOnInit() {
    this.id = localStorage.getItem('token');
    //console.log(this.id);
  }
  logout() {
    console.log('logged out');
    this.authService.logout();
    this.router.navigate(['/signin']);
  }
}
