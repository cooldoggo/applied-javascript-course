import { Component } from '@angular/core';

import { ColorHomeComponent } from './color-tool/components/color-home/color-home.component';
import { CarHomeComponent } from './car-tool/components/car-home/car-home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ColorHomeComponent, CarHomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tools-app-angular';
}
