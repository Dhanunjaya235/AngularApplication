import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.css']
})
export class CoordinatesComponent {
  city!:string;
  show=false;
  latitude!:number;
  longitude!:number;
  constructor(private http:HttpClient){}

  weatherForecast(){
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3cd31a95f107d9ecd499eb2e6dec17b1&units=metric';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.show=true;
      this.latitude=data.coord.lat;
      this.longitude=data.coord.lon;
    });
  }
}
