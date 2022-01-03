import { Component, OnInit } from '@angular/core';
import { IPartialAnimeManga } from 'src/app/shared/models/interfaces-models';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private readonly homeService: ApiService) { }

  ngOnInit(): void {
}

selectedContent(item:IPartialAnimeManga){
  this.homeService.getApi(item.image_url, item.title).subscribe(data => console.log(data));
}


}
