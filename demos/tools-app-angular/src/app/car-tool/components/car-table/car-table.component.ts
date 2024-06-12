import { Component, Input,  Output, EventEmitter } from '@angular/core';
import { NgFor } from '@angular/common';

import { Car } from '../../models/cars';

@Component({
  selector: 'app-car-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './car-table.component.html',
  styleUrl: './car-table.component.css'
})
export class CarTableComponent {

  @Input()
  cars: Car[] = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  doDeleteCar(carID: number) {
    this.deleteCar.emit(carID);
  }

}