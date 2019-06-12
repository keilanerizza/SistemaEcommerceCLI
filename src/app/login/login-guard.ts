import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginServiceService } from './login-service.service';

@Injectable()
export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, private authService: LoginServiceService) {}
    
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot,
     state: import("@angular/router").RouterStateSnapshot): boolean {
        if(this.authService.isAuthenticated()){
            return true;
        }

        this.router.navigate(['/signin']);
        return false;
    }
}