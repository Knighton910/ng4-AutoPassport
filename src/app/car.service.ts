import { Car } from './Car.model';

const CARS = [
  new Car(
    '../assets/sls.jpg',
    'Mercedes SLS AMG',
    '830.00 /day',
    '185 MPH',
    '180,452',
    'In true Mercedes-Benz fashion, the SLS is a pleaser that makes no compromises.\n' +
    '\n' +
    'Top up or down, you\'re guaranteed to have a good time. Enjoy the wind in your hair or the ventilated seats, this Benz ticks all of the boxes.\n' +
    '\n' +
    'The 449hp V8 propels this machine from 0-60 in an exciting 4.5 seconds. Rent this car for the day, week or month and you will not be disappointed! Come race with us, rally around the world, experience wondrous culinary feats in our new, member-only restaurant or soak up the sun and sangria on our beautiful river terrace. This is a new level of membership. Easy access',
    'MSRP: 180,452',
    'Transmission: Manual',
    'Horsepower: 430',
    'Interior: Dark',
    1,
  ),
  new Car(
    '../assets/hybrid.jpg',
    'Porsche Panamera S',
    '750.00 /day',
    '185 MPH',
    '78,100',
    'Doesnt matter the kind of trip you are making – long or short, for pleasure or business, or even just routine driving around the city – rent the Porsche Panamera it offers luxury in a different way. When you sit inside the Panamera, there are four unique things that stand out: first, the centre console is slightly elevated; second, the car has four individual bucket style seats; third, the amount of space in the rear where even the tallest passengers will find plenty of room for your head and feet; and fourth, the utility of the luggage area thanks to the folding rear seats there is plenty of space for luggage. The four individual bucket seats are comfortable and offer good support for your back. The panamera also comes with an electrically adjustable 8-way power seats in the rear which is another reason to rent Porsche panamera',
     'MSRP: 78,100',
    'Transmission: Auto',
    'Horsepower: 309',
    'Interior: Dark Grey',
    2,
  ),
  new Car(
    '../assets/caddie.jpg',
    'Cadillac Escalade ESV',
    '529.00 /day',
    '150 MPH',
    '90,000',
    'Worth a special mention is the Cadillac escalade for rent. Even if you are not an automobile buff, it is a well known fact that Cadillac escalade is a grand and luxurious SUV manufactured by General Motors. It made the débuted as the 1st Cadillac in the popular SUV market. Even though it is a huge vehicle, it still is one of the most elegant and efficient automobile that is available in the market. When in wonder as to which car to rent, rent Cadillac Escalade ESV. Come race with us, rally around the world, experience wondrous culinary feats in our new, member-only restaurant or soak up the sun and sangria on our beautiful river terrace. This is a new level of membership. Easy access',
     'MSRP: $90,000',
    'Transmission: Auto',
    'Horsepower: 240',
    'Interior: Grey',
    3,
  ),
  new Car(
    '../assets/b-mo.jpg',
    'Tumbler -Batmobile',
    '3099.00 /day',
    '205 MPH',
    'PRICELESS',
    'Almost all of the popular car rental companies now offer a suite of exotic cars and luxury cars in their fleet.  This has made it possible for you to rent a Batmobile at any number of rent-a-car company’s nationwide locations.  Diamond Car Rentals however, stands out as the premier provider of luxury and exotic cars for rent.  With their impressive fleet of exclusive high-end vehicles which includes the Land Rover Sport, the BMW and the Maserati, you can rent the Batmobile in the colour that fits your personality.  They have a strategic presence in in more than seven locations nationwide. Rent Batmobile today!',
     'MSRP: PRICELESS',
    'Transmission: Auto',
    'Horsepower: 360',
    'Interior: Black',
    4,
  ),
  new Car(
    '../assets/p1.jpg',
    'P1 McLaren',
    '3050.00 /day',
    '217 MPH',
    '1,150,000',
    'It’s much easier now-a-days to find exotic car rentals to fit your distinctive taste and style.  In fact, that dream car that you have always wanted to drive is now available because you can now rent P1 McLaren at Diamond Exotic Rentals.  Because of the changes that the car rental industry has seen over the years, it has brought with it the opportunity for you to rent high-performance vehicles and a P1 McLaren rental has now become possible. This new phenomenon is way beyond the flashy car rentals that were available in the sixties.  They had issues with availability and were way too pricy for the times.',
     'MSRP: 1,150,000',
    'Transmission: Manual',
    'Horsepower: 573',
    'Interior: Slate Grey',
    5,
  ),
  new Car(
    '../assets/saudi.jpg',
    '458 Itaila Ferrari',
    '1390.00 /day',
    '210 MPH',
    '195,000',
    'This 7th Generation of the Iconic Sports Car boasts a Rear-Engine layout built for high racing performance. It has a 7-speed – 481 horsepower engine with PDK® transmission which puts this Ferrari car rental well ahead of the back when it comes to speed and power.  Rent 458 Itaila Ferrari elevated centre console;\n' +
    'four individual seats;\n' +
    'enough space in the rear for taller passengers to have plenty leg and head room; and\n' +
    'versatile luggage compartment made possible because of folding rear seats\n',
     'MSRP: 195,000',
    'Transmission: Manual',
    'Horsepower: 481',
    'Interior: Peanut Butter Leather',
    6,
  )
];

// const CARSDEETS = [
//   new CarDeets(
//     '../assets/p-cockpit.jpg',
//     'Porsche Panamera S',
//     `Hipster matter the kind of trip you are making – long or short,for`,
//     1
//   ),
//   new CarDeets(
//     '../assets/cad.jpg',
//     'Cadillac Escalade ESV',
//     `Hipster matter the kind of trip you are making – long or short,for`,
//     2
//   )
// ];

export class CarService {
  getCar() {
    return CARS;
  }
  // getCarDeets() {
  //   return CarDeets;
  // }

  getCars(id: number) {
    return CARS.find(car => car.id === id);
  }

}

