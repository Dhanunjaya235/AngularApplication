import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-sun-timings',
  templateUrl: './sun-timings.component.html',
  styleUrls: ['./sun-timings.component.css']
})
export class SunTimingsComponent {
  city!:string;
  show=false;
  sunrise!:any;
  sunset!:any;
  constructor(private http:HttpClient){}

  weatherForecast(){
    const apiUrl='https://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=3cd31a95f107d9ecd499eb2e6dec17b1&units=metric';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.show=true;
      this.sunrise=new Date(data.sys.sunrise*1000);
      this.sunset=new Date(data.sys.sunset*1000);
    });
  }
}
