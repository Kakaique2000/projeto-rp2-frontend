import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-avatar-modal',
  templateUrl: './avatar-modal.component.html',
  styleUrls: ['./avatar-modal.component.scss']
})
export class AvatarModalComponent implements OnInit {

  readonly urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

  constructor() { }

  @Input()
  profilePic: string;

  @Input()
  isSaving = false;

  formControl: FormControl;


  @Output()
  click = new EventEmitter<Event>();

  ngOnInit(): void {
    this.formControl = new FormControl(this.profilePic, Validators.pattern(this.urlPattern))
  }

}
