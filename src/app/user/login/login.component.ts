import { Component, Input } from '@angular/core';
import { RouteGuardService } from 'src/app/route-guard.service';
import { RegisteredUsersService } from 'src/app/registered-users.service';
import { ShareUserService } from 'src/app/share-user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  allUsers: any = [];
  isRegistered = false;
  show = this.service.isLoggedIn();
  username!: string;
  password!: string;
  constructor(private service: RouteGuardService, private users: RegisteredUsersService, private user: ShareUserService) { }

  submitDetails() {
    this.users.getData().subscribe(data => {
      this.allUsers = data;
      for (let item of this.allUsers) {
        if (this.username == item.userName) {
          if (this.password == item.password) {
            this.service.login();
            window.alert("You have succesfully logged in");
            this.show = true;
            this.isRegistered = true;
            this.user.setData(this.username);
          }
          else{
            window.alert("You have entered a wrong password");
            this.isRegistered = true;
            this.password = "";
          }

        }
      }
      if (!this.isRegistered) {
        window.alert("You have not registered yet. Register now to login");
        this.username = "";
        this.password = "";
      }
    })
  }
}
