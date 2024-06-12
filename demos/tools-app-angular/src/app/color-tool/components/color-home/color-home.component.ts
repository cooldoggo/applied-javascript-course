import { Component, inject, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { Color, NewColor } from '../../models/colors';
import { ColorsHttpDataService } from '../../services/colors-http-data.service';
import { ToolHeaderComponent } from '../../../shared/components/tool-header/tool-header.component';
import { ColorListComponent } from '../color-list/color-list.component';
import { ColorFormComponent } from '../color-form/color-form.component';

@Component({
  selector: 'app-color-home',
  standalone: true,
  imports: [ToolHeaderComponent, ColorListComponent, ColorFormComponent],
  templateUrl: './color-home.component.html',
  styleUrl: './color-home.component.css'
})
export class ColorHomeComponent implements OnInit {

  colorsData = inject(ColorsHttpDataService);

  headerText = "Color Tool";

  colors: Color[] = [];

  ngOnInit(): void {
    this.colorsData.all().subscribe(colors => {
      this.colors = colors;
    });
  }

  

  addColor = (color: NewColor) => {
    this.colorsData
    .create(color)
    .pipe(switchMap(() => this.colorsData.all()))
    .subscribe(colors => {
      this.colors = colors; 
    });
  };

  deleteColor = (colorId: number) => {
    this.colorsData
    .delete(colorId)
    .pipe(switchMap(() => this.colorsData.all()))
    .subscribe(colors => {
      this.colors = colors; 
    });
  };

}
