import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ShareUserService {
  private user: any;
  constructor() { }

  getData() {
    return this.user
  }

  setData(data: any) {
    this.user = data;
  }
}
