import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPartialAnimeManga } from 'src/app/shared/models/interfaces-models';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() submitted = new EventEmitter<IPartialAnimeManga>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: NgForm) {
    this.submitted.emit(f.form.value);
  }

}
