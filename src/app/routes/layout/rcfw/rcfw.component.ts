import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

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
  config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleEvent(event: CountdownEvent) {
    console.log(event);
    if (event.action === 'done') {
      this.router.navigate([`/index`]);
    }
  }
}
