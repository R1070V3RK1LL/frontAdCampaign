import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate {
    constructor(private router: Router, private tokenStorage:TokenStorageService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.isLoggedIn()) {
            return true;
        }
        // navigate to login page as user is not authenticated
        this.router.navigate(['/signin']);
        return false;
    }
    public isLoggedIn(): boolean {
        let status;
        if (localStorage.getItem('isLoggedIn') == "true") {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }
    public isAdmin(): boolean {
        let status = false;
        console.log(this.tokenStorage.getUser());
        if (this.tokenStorage.getUser().roles=='admin') {
            status = true;
        }
        else {
            status = false;
        }
        return status;
    }
}