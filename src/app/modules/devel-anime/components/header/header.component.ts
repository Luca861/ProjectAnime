import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialAnimeManga, PartialAnimeManga } from 'src/app/shared/models/interfaces-models';
import { ApiService } from '../../services/api.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  result$!: Observable<PartialAnimeManga[]>
  research!: IPartialAnimeManga;

  constructor(private readonly headerService: ApiService) { }

  ngOnInit(): void { }

  selectedContent(value: IPartialAnimeManga) {
    this.result$ = this.headerService.getApi(value.image_url, value.title);
  }
  
}


