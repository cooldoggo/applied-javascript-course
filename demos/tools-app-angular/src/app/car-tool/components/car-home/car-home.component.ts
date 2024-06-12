import { Component } from '@angular/core';

import { Car } from '../../models/cars';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { CarTableComponent } from '../car-table/car-table.component';
import { NewCar } from '../../models/cars';
import { CarFormComponent } from '../car-form/car-form.component';
import { DomElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-car-home',
  standalone: true,
  imports: [ToolHeaderComponent, CarTableComponent, CarFormComponent],
  templateUrl: './car-home.component.html',
  styleUrl: './car-home.component.css'
})
export class CarHomeComponent {

  headerText = "Car Tool";

  cars:  Car[] = [
    { id: 1, make: 'mazda', model: '3', year: 2024, color: 'blue', price: 30 },
    { id: 2, make: 'honda', model: '4', year: 2004, color: 'red', price: 10 },

  ];

  addCar(car: NewCar) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });

  }

  deleteCar(carID: number) {
    this.cars = this.cars.filter(c => c.id !== carID);
  }

}
