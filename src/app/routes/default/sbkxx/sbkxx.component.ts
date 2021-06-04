import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Renyuanjiben } from '@core/models/renyuanjiben';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { NzMessageService } from 'ng-zorro-antd/message';

/**
 * 社保卡信息
 */
@Component({
  selector: 'app-sbkxx',
  templateUrl: './sbkxx.component.html',
  styleUrls: [
    './sbkxx.component.less',
    '../default.component.less'
  ]
})
export class SbkxxComponent implements OnInit {

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
  ) { }

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

  back() {
    history.back();
  }
}
