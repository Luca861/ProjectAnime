import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  submit(f: NgForm) {
    this.research = f.form.value;
    this.result$ = this.headerService.getApi(this.research.image_url, this.research.title);
  }
}


