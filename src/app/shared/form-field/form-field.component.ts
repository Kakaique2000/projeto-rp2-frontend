import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  fControl: FormControl;

  @Input()
  label: string;

  @Input()
  placeholder: string = 'insira seu ' + this!.label;

  @Input()
  mask: string;

  ngOnInit(): void {
  }

  getLabelNgClass() {
    return ({ 'focus': this.isInputInFocus, 'error': this.fControl.invalid, 't-input-label': true })
  }


}
