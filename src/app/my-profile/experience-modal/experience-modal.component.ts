import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-experience-modal',
  templateUrl: './experience-modal.component.html',
})
export class ExperienceModalComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Input()
  isSaving = false;

  formControl: FormGroup;

  @Output()
  click = new EventEmitter<Event>();

  ngOnInit(): void {
    this.formControl = this.fb.group({
      office: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      initialDate: ['', []],
      endDate: ['', []],
    });
  }

  get officeControl() {
    return this.formControl.get('office') as FormControl;
  }

  get companyNameControl() {
    return this.formControl.get('companyName') as FormControl;
  }

  get initialDateControl() {
    return this.formControl.get('initialDate') as FormControl;
  }

  get endDateControl() {
    return this.formControl.get('endDate') as FormControl;
  }
}
