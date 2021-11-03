import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-results-city',
  templateUrl: './results-city.component.html',
  styleUrls: ['./results-city.component.scss']
})
export class ResultsCityComponent implements OnInit {

  id_city: number = 0
  informacion_ciudad: any = {}

  @Input() city_details: any;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

  getWoeid(woeid: number) {
    this.id_city = woeid
    console.log(this.id_city, "id_city")
    this.weatherService.getWeatherDetails(woeid).subscribe(res => this.informacion_ciudad = res)
  }

}
