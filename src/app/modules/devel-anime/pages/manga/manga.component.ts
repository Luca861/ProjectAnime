import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialContent } from 'src/app/shared/models/interfaces-models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.scss']
})
export class MangaComponent implements OnInit {

  category: string = 'manga';
  topManga$! :Observable<IPartialContent[]>

  constructor(private readonly mangaService:ApiService) { }

  ngOnInit(): void {
    this.topManga$ = this.mangaService.getTopTitle(this.category);
  }

}
