import { Component, OnInit } from '@angular/core';
import {CarService} from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})

export class CarsComponent implements OnInit {
  // cars: Car[];
  cars: any[];

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.cars = this.carService.getCar();
  }
}
