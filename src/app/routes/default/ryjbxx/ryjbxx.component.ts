import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Renyuanjiben } from '@core/models/renyuanjiben';
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
    '../default.component.less'
  ]
})
export class RyjbxxComponent implements OnInit {
  config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  public cardno = '';
  public title = '个人基本信息';
  public data: Renyuanjiben = new Renyuanjiben();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title,
    private shebaoka: ShebaokaService,
    private shehuibaoxian: ShehuibaoxianService,
    private msgSvc: NzMessageService
  ) {
    this.titleSvc.setTitle(this.title);
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;
      this.loadData();
    });
  }

  loadData() {
    // this.shebaoka.getPersonId('', this.cardno, '').subscribe(res => {
    //   console.log(res);
    // });
    this.shehuibaoxian.getRenyuanjibenTest().subscribe(res => {
      console.log(res.data.data);
      this.data = res.data.data[0] as Renyuanjiben;
      console.log(this.data);
      this.loading = false;
    });
    // setTimeout(() => {
    //   this.loading = false;
    // }, 2000);
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
