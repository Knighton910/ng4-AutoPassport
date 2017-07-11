import { Car, CarDeets } from './Car.model';

const CARS = [
  new Car(
    '../assets/sls.jpg',
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
    '3050.00 /day',
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

const CARSDEETS = [
  new CarDeets(
    '../assets/p-cockpit.jpg',
    'Porsche Panamera S',
    `Doesnt matter the kind of trip you are making – long or short,for`,
    1
  ),
  new CarDeets(
    '../assets/cad.jpg',
    'Cadillac Escalade ESV',
    `Doesnt matter the kind of trip you are making – long or short,for`,
    2
  )
];

export class CarService {
  getCars() {
    return CARS;
  }
  getCarDeets() {
    return CarDeets;
  }

  getCarDeet(id: number) {
    return CARSDEETS.find(carDeet => carDeet.id === id);
  }

}

