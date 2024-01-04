import { Component,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  city!:string;
  description!:string;
  temperature!:number;
  show=false;
  constructor(private http:HttpClient){}
  time!:any;
  weatherForecast(){
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3cd31a95f107d9ecd499eb2e6dec17b1&units=metric';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.temperature = data.main.temp;
      this.show=true;
      this.time=new Date(data.dt*1000);
      this.description=data.weather[0].description;
    });
  }
}
