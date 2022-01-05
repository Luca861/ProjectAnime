import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPartialContent } from 'src/app/shared/models/interfaces-models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  category: string = 'anime';
  topAnime$! : Observable<IPartialContent[]>;

  constructor(private readonly animeService:ApiService) { }

  ngOnInit(): void {
    this.topAnime$ = this.animeService.getTopTitle(this.category);
  }

}
