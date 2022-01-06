import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialAnimeManga } from 'src/app/shared/models/interfaces-models';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() content$?:Observable<IPartialAnimeManga[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
