import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ListComponent } from './list/list.component';

@Component({
  selector: 'app-sybx',
  templateUrl: './sybx.component.html',
  styleUrls: ['./sybx.component.less', '../routes.component.less']
})
export class SybxComponent implements OnInit {
  title = '失业保险金发放';
  constructor(
    public router: Router,
    private modalSvc: NzModalService,
    private msgSvc: NzMessageService
  ) { }

  ngOnInit() {

  }

  //读身份证
  readidcard() {
    const idcard = '321321198801087813';
    const modal = this.modalSvc.create({
      nzTitle: this.title,
      nzContent: ListComponent,
      nzWidth: '70%',
      nzComponentParams: {
        idcard: idcard
      },
      nzFooter: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadData();
    });
  }

  //读社保卡
  readsicard() {
    const sicard = '321321198801087813';
    const modal = this.modalSvc.create({
      nzTitle: this.title,
      nzContent: ListComponent,
      nzWidth: '70%',
      nzComponentParams: {
        sicard: sicard
      },
      nzFooter: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadData();
    });
  }
}
