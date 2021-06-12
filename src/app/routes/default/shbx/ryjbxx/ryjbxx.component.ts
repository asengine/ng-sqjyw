import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Renyuanjiben } from '@core/models/shehuibaoxian/renyuanjiben';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

/**
 * 人员基本信息查询
 */
@Component({
  selector: 'app-ryjbxx',
  templateUrl: './ryjbxx.component.html',
  styleUrls: [
    './ryjbxx.component.less',
    '../../default.component.less'
  ]
})
export class RyjbxxComponent implements OnInit {
  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  public cardno = '';
  public title = '个人基本信息';
  public data: Renyuanjiben = new Renyuanjiben();
  public personId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title,
    private shebaoka: ShebaokaService,
    private shehuibaoxian: ShehuibaoxianService,
    private msgSvc: NzMessageService
  ) {
    this.titleSvc.setTitle(this.title);
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
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;
      this.shebaoka.getPersonId('', this.cardno, '').subscribe(res => {
        console.log(res);
        this.personId = res.data.bac001;
        if (this.personId) {
          this.loadData();
        }
      });
    });
  }

  loadData() {
    this.shehuibaoxian.getRenyuanjiben(this.personId, 1, 1).subscribe(res => {
      console.log(res.data.data);
      this.data = res.data.data[0];
      console.log(this.data);
      this.loading = false;
    });
  }


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
