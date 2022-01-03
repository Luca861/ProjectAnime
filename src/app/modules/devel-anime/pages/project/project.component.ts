import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class ProjectComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}

/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngprj-project',
  template: `<router-outlet></router-outlet>`

})
export class ProjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */
