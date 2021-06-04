import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';

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

  ) { }

  ngOnInit(): void {

  }
}
