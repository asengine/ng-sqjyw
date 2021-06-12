import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { filter } from 'rxjs/operators';

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

  }

  handleEvent(event: CountdownEvent) {
    console.log(event);
    if (event.action === 'done') {
      this.router.navigate([`/index`]);
    }
  }
}
