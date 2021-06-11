import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Renyuanjiben } from '@core/models/shehuibaoxian/renyuanjiben';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

/**
 * 社保卡信息
 */
@Component({
  selector: 'app-sbkxx',
  templateUrl: './sbkxx.component.html',
  styleUrls: [
    './sbkxx.component.less',
    '../../default.component.less'
  ]
})
export class SbkxxComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  public cardno = '';
  public title = '社保卡信息';
  public data: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title,
    private shebaoka: ShebaokaService,
    private shehuibaoxian: ShehuibaoxianService,
    private msgSvc: NzMessageService
  ) {
    //每次进入路由重置倒计时
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.config = {
            format: `mm:ss`,
            leftTime: 180,
          };
          console.log(this.config);
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;
      this.loadData();
    });
  }

  loadData() {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

  /**倒计时事件 */
  handleEvent(event: CountdownEvent) {
    console.log(event);
    if (event.action === 'done') {
      this.router.navigate([`/index`]);
    }
  }

  back() {
    history.back();
  }
}
