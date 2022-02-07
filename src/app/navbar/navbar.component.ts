import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { AuthGuard } from './../auth.guard';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    isLoggedIn : boolean = false;

    constructor(private authGuard: AuthGuard,private tokenStorageService:TokenStorageService) {}

    ngOnInit() {
      //this.isLoggedIn$=this.authGuard.isLoggedIn();
      //this.isAdmin$=this.authGuard.isAdmin();
      this.isLoggedIn = localStorage.getItem('isLoggedIn') == "true";
    }

    onLogout(){
      this.tokenStorageService.signOut();
      localStorage.setItem('isLoggedIn', "false");
      window.location.reload();
  }
}
