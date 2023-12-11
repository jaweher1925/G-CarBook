// car-reservation.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})
export class CarReservationComponent {
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
