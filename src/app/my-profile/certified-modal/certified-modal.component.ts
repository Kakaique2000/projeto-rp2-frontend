import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-certified-modal',
  templateUrl: './certified-modal.component.html',
})
export class CertifiedModalComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Input()
  isSaving = false;

  formControl: FormGroup;

  @Output()
  click = new EventEmitter<Event>();

  ngOnInit(): void {
    this.formControl = this.fb.group({
      name: ['', []],
      url: ['', []],
    });
  }

  get nameCourseControl() {
    return this.formControl.get('name') as FormControl;
  }

  get linkCourseControl() {
    return this.formControl.get('url') as FormControl;
  }
}
