import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.css']
})
export class WindComponent {
  city!: string;
  show = false;
  humidity!: number;
  pressure!: number;
  speed!: number;
  direction!: number;
  constructor(private http: HttpClient) { }

  weatherForecast() {
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=3cd31a95f107d9ecd499eb2e6dec17b1&units=metric';
    this.http.get(apiUrl).subscribe((data: any) => {
      this.show = true;
      this.speed = data.wind.speed;
      this.direction = data.wind.deg;
    });
  }
}
