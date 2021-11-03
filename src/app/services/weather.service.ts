import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: string){
    return this.http.get(`https://www.metaweather.com/api/location/search/?query=${city}`)
  }

  getWeatherIcon(icon: string){
    return this.http.get(`https://www.metaweather.com/static/img/weather/${icon}.svg`)
  }

  getWeatherDetails(id_city: number){
    return this.http.get(`https://www.metaweather.com/api/location/${id_city}`)
  }
}
