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

    public isLoggedIn$= new Observable<boolean>();
    public isAdmin$=new Observable<boolean>();

    constructor(private authGuard: AuthGuard,private tokenStorageService:TokenStorageService) {}

    ngOnInit() {
      //this.isLoggedIn$=this.authGuard.isLoggedIn();
      //this.isAdmin$=this.authGuard.isAdmin();
    }

    onLogout(){
      this.tokenStorageService.signOut();
      localStorage.setItem('isLoggedIn', "false");
  }
}
