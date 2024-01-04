import { Component } from '@angular/core';
import { RegisteredUsersService } from 'src/app/registered-users.service';
import { ShareUserService } from 'src/app/share-user.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private users:RegisteredUsersService,private user:ShareUserService){}
  userLoggedIn:any;
  firstName:any;
  lastName:any;
  userName:any;
  email:any;
  mobile:any;
  allusers:any=[];
  ngOnInit(){
    this.userLoggedIn=this.user.getData();
    this.users.getData().subscribe(data=>{
      this.allusers=data;
      for(let user of this.allusers){
          if(this.userLoggedIn==user.userName){
            this.firstName=user.firstName;
            this.lastName=user.lastName;
            this.userName=user.userName;
            this.email=user.email;
            this.mobile=user.mobile;
          }
      }
    })
  }
}
