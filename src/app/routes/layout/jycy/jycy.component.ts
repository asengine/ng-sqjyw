import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

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
  config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.config = {
            format: `mm:ss`,
            leftTime: 180,
          };
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.config = {
        format: `mm:ss`,
        leftTime: 180,
      };
    });
  }

  handleEvent(event: CountdownEvent) {
    console.log(event);
    if (event.action === 'done') {
      this.router.navigate([`/index`]);
    }
  }
}
