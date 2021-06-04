import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jycy',
  templateUrl: './jycy.component.html',
  styleUrls: [
    './jycy.component.less',
    '../layout.component.less'
  ]
})
export class JycyComponent implements OnInit {

  effect = 'scrollx';


  constructor() { }

  ngOnInit(): void {
  }

}
