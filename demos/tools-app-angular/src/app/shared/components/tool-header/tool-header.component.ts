import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tool-header',
  standalone: true,
  imports: [],
  templateUrl: './tool-header.component.html',
  styleUrl: './tool-header.component.css'
})
export class ToolHeaderComponent {

  @Input()
  headerText = 'Tool App';
}
