import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../services/weather.service";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {

  city = new FormControl('', [Validators.required])
  cityArr : any = []

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }
  getCity(){
    this.weatherService.getWeather(this.city.value).subscribe(res=>{
      this.cityArr = res
    })
  }

}
