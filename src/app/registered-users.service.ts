import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisteredUsersService {

  constructor(private http:HttpClient) { }
  apiUrl="http://localhost:3000";
  storedata(data:any){
    return this.http.post(this.apiUrl+'/registeredUsers',data);
  }

  getData(){
    return this.http.get(this.apiUrl+'/registeredUsers');
  }
}
