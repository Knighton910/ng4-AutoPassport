import { Component, OnInit } from '@angular/core';
import { CarService } from '../../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})

export class CarDetailsComponent implements OnInit {
  car: any;

  constructor(private carService: CarService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.car = this.carService.getCars
    ( + this.route.snapshot.params['id'] );
  }
}

// import { Component, OnInit } from '@angular/core';
// import { CarService } from '../../car.service';
//
// @Component({
//   templateUrl: './car-details.component.html',
//   styleUrls: ['./car-details.component.css']
// })
//
// export class CarDetailsComponent implements OnInit {
//   carDeet: any;
//
//   constructor(private carService: CarService) {}
//
//   ngOnInit() {
//     this.carDeet = this.carService.getCarDeet(1);
//   }
// }
//

