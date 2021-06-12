import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

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
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }
}
