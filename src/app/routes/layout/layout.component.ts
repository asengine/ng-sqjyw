import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: [
    './layout.component.less',
    '../routes.component.less'
  ]
})
export class LayoutComponent implements OnInit {
  tabs = [1, 2, 3];
  constructor() { }

  ngOnInit(): void {
  }

}
