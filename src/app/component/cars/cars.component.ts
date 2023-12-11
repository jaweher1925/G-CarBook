import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  pickupDate: Date = new Date(); 
  returnDate: Date = new Date(); 
  additionalOptions: string[] = [];

  availableOptions: string[] = ['Child Seat', 'GPS', 'Insurance'];

  onReserveCar() {
    console.log('Car reserved with the following details:');
    console.log('Pickup Date:', this.pickupDate);
    console.log('Return Date:', this.returnDate);
    console.log('Additional Options:', this.additionalOptions);
  }
}
