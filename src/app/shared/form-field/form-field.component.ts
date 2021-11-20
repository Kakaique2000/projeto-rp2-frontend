import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocomplete } from '@angular/material/autocomplete';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  constructor() { }

  isInputInFocus = false;
  activeElement: HTMLElement | null;

  @Input()
  fControl: FormControl = new FormControl('');

  @Input()
  matAutocomplete: MatAutocomplete | null = null;

  @Input()
  label: string;

  @Input()
  placeholder: string = '';

  @Input()
  mask: string;

  ngOnInit(): void {
  }

  getLabelNgClass() {
    return ({ 'focus': this.isInputInFocus, 'error': this.fControl.invalid, 't-input-label': true })
  }


}
