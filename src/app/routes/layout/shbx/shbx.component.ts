import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shbx',
  templateUrl: './shbx.component.html',
  styleUrls: [
    './shbx.component.less',
    '../layout.component.less'
  ]
})
export class ShbxComponent implements OnInit {

  effect = 'scrollx';
  constructor() { }

  ngOnInit(): void {
  }

}
