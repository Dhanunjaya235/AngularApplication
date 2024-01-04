import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RouteGuardService } from './route-guard.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteService implements CanActivate {

  constructor(private authService: RouteGuardService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
