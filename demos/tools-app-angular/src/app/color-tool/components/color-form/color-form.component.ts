import { Component, OnInit, inject, DoCheck, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { NewColor } from '../../models/colors';

type ColorForm = {
  name: FormControl<string>,
  hexcode: FormControl<string>,

}

@Component({
  selector: 'app-color-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './color-form.component.html',
  styleUrl: './color-form.component.css'
})
export class ColorFormComponent implements OnInit, DoCheck {


  fb = inject(FormBuilder);

  @Output()
  submitColor = new EventEmitter<NewColor>();

  // the ! symbol tells Typescript do not complain that I did not assign a value
  colorForm!: FormGroup<ColorForm>;

  ngOnInit(): void {
    this.colorForm = this.fb.nonNullable.group({
      name: '',
      hexcode: '',
    });
  }

  ngDoCheck(): void {
    console.log(this.colorForm.value);
  }

  doSubmitColor(): void {
    this.submitColor.emit(this.colorForm.value as NewColor);

    this.colorForm.reset();
  }



}
