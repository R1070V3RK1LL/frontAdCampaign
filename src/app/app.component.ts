import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  constructor(private router: Router, private tokenStorageService:TokenStorageService) {}
  ngOnInit() {
    console.log({})
    this.isLoggedIn = localStorage.getItem("isLoggedIn") == "true";

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
      this.username = user.username;
    
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    //window.location.reload();
    this.router.navigate(['/signin']);
  }

}
