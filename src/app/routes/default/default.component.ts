import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: [
    './default.component.less',
    '../routes.component.less'
  ]
})
export class DefaultComponent implements OnInit {

  constructor(
    private router: Router,
    private msg: NzMessageService
  ) { }

  ngOnInit(): void {

  }
}
