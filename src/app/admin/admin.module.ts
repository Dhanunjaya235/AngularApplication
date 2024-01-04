import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    AdminloginComponent
  ],
  imports: [
    CommonModule,UserModule
  ],
  exports:[
    AdminloginComponent
  ]
})
export class AdminModule { }
