import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shbx',
  templateUrl: './shbx.component.html',
  styleUrls: [
    './shbx.component.less',
    '../routes.component.less'
  ]
})
export class ShbxComponent implements OnInit {
  array = [1, 2, 3, 4];
  effect = 'scrollx';
  constructor() { }

  ngOnInit(): void {
  }

}
