import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jycy',
  templateUrl: './jycy.component.html',
  styleUrls: [
    './jycy.component.less',
    '../routes.component.less'
  ]
})
export class JycyComponent implements OnInit {

  effect = 'scrollx';


  constructor() { }

  ngOnInit(): void {
  }

}
