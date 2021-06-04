import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rcfw',
  templateUrl: './rcfw.component.html',
  styleUrls: [
    './rcfw.component.less',
    '../layout.component.less'
  ]
})
export class RcfwComponent implements OnInit {

  effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }

}
