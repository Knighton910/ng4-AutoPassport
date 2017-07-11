import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';

@Component({
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {
  carDeet: any;

  constructor(private carService: CarService) {}

  ngOnInit() {
    this.carDeet = this.carService.getCarDeet(1);
  }
}
