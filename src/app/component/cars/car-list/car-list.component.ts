import { Component, OnInit ,Input} from '@angular/core';
import { Car } from '../../model/car.model';
 

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() cars: Car[] = []; 
  constructor() { }

  ngOnInit(): void {
  }


  editCar(matricule: String): void {
    console.log(`Editing car with ID: ${matricule}`);
  }

  deleteCar(matricule: String): void {
    console.log(`Deleting car with ID: ${matricule}`);
  }
}
