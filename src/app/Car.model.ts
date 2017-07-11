/**
 * Created by kelvinknighton on 7/10/17.
 */

export class Car {
  constructor(
    public imageUrl: string,
    public name: string,
    public price: string,
    public topSpeed: string,
    public msrp: string
  ) {

  }
}

export class CarDeets {
  constructor(
    public imageUrl: string,
    public name: string,
    public info: string,
    public id: number
  ) {}
}

