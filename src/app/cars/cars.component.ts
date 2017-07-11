import { Component } from '@angular/core';
import { Car } from '../Car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars: Car[];

  constructor() {
    this.cars = [
      new Car(
        '../assets/amg.jpg',
        'Mercedes SLS AMG',
        '830.00 /day',
        '185 MPH',
        '180,452'
      ),
      new Car(
        '../assets/hybrid.jpg',
        'Porsche Panamera S',
        '750.00 /day',
        '185 MPH',
        '78,100'
      ),
      new Car(
        '../assets/caddie.jpg',
        'Cadillac Escalade ESV',
        '529.00 /day',
        '150 MPH',
        '90,000'
      ),
      new Car(
        '../assets/b-mo.jpg',
        'Tumbler -Batmobile',
        '3099.00 /day',
        '205 MPH',
        'PRICELESS'
      ),
      new Car(
        '../assets/p1.jpg',
        'P1 McLaren',
        '1400.00 /day',
        '217 MPH',
        '1,150,000'
      ),
      new Car(
        '../assets/saudi.jpg',
        '458 Itaila Ferrari',
        '1390.00 /day',
        '210 MPH',
        '195,000'
      )
    ];
  }
}
