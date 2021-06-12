import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-shbzk',
  templateUrl: './shbzk.component.html',
  styleUrls: [
    './shbzk.component.less',
    '../layout.component.less'
  ]
})
export class ShbzkComponent implements OnInit {

  effect = 'scrollx';
  config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };

  constructor(
    private router: Router
  ) {
    //每次进入路由重置倒计时
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
