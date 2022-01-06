import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialContent } from 'src/app/shared/models/interfaces-models';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  @Input() topContent$!:Observable<IPartialContent[]>;

  constructor() { }

  ngOnInit(): void {
  }

}
