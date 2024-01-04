import { Component } from '@angular/core';
import { RouteGuardService } from './route-guard.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Report Portal';
  constructor(private service: RouteGuardService,private router:Router) { }
  show = this.service.isLoggedIn();
  logout() {
    this.service.logout();
  }
  ngOnInit(){
    this.router.navigate(['/home'])
  }
  isLoggedIn() {
    if (!this.service.isLoggedIn()) {
      window.alert("Please Login to use the features");
    }
  }
}
