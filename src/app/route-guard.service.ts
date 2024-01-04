import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {

  constructor() { }
  private loggedin = false;
  login() {
    this.loggedin = true;
  }
  logout() {
    if (this.isLoggedIn()) {
      this.loggedin = false;
      window.alert("You have successfully logged out")
    }
    else {
      window.alert("Login first To Logout")
    }
  }
  isLoggedIn(): boolean {
    return this.loggedin;
  }
}
