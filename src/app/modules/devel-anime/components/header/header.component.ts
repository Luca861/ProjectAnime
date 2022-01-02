import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPartialAnimeManga } from 'src/app/shared/models/interfaces-models';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() submitContent = new EventEmitter<IPartialAnimeManga>();

  selectedContent:string = '';
  selectedCategory:string = '';

  constructor() { }

  ngOnInit(): void {}

  submit(f:NgForm){
    this.submitContent.emit(f.form.value)
  }




  }


