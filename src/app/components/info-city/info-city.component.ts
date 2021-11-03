import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from "../../services/weather.service";

@Component({
  selector: 'app-info-city',
  templateUrl: './info-city.component.html',
  styleUrls: ['./info-city.component.scss']
})
export class InfoCityComponent implements OnInit {

  @Input() cityWeather: any

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }

}
