import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {
  
  newCarModel: string = '';
  newCarBrand: string = '';
  newCarColor: string = '';
  constructor() { }
  carModel: string = '';
  carMake: string = '';
  carYear: number | null = null;

  onSubmit() {
    // Add your logic to handle form submission
    console.log('Car added:', { model: this.carModel, make: this.carMake, year: this.carYear });
  }
  
  onAddNewCar() {
    console.log('New car added:', this.newCarBrand, this.newCarModel, this.newCarColor);
  }

  ngOnInit(): void {
  }

}
