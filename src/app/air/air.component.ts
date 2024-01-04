import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.css']
})
export class AirComponent {
  city!:string;
  show=false;
  humidity!:number;
  pressure!:number;
  constructor(private http:HttpClient){}

  weatherForecast(){
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3cd31a95f107d9ecd499eb2e6dec17b1&units=metric';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.show=true;
     this.humidity=data.main.humidity;
     this.pressure=data.main.pressure;
    });
  }
}
