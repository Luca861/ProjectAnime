import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPartialAnimeManga } from 'src/app/shared/models/interfaces-models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  testOne$!: Observable<IPartialAnimeManga[]>;

  constructor(private readonly api: ApiService, private readonly http: HttpClient) { }

  ngOnInit(): void {
    this.testOne$ = this.api.getApi('anime', 'Tsubasa');
  }

}

