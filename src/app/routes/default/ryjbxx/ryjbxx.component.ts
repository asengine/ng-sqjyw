import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

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

  public loading = true; //正在加载数据
  public cardno = '';
  public title = '个人基本信息';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title,
    private msgSvc: NzMessageService,
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
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

  back() {
    history.back();
  }
}
