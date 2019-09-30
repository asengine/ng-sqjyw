import { Component, OnInit } from '@angular/core';
import { CybtComponent } from './cybt/cybt.component';
import { CyzjComponent } from './cyzj/cyzj.component';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { GrdkComponent } from './grdk/grdk.component';
import { QydkComponent } from './qydk/qydk.component';

@Component({
  selector: 'app-cyfw',
  templateUrl: './cyfw.component.html',
  styleUrls: ['./cyfw.component.less', '../routes.component.less']
})
export class CyfwComponent implements OnInit {
  isVisible = false;
  cmpMap = {
    'cybt': CybtComponent,//创业补贴
    'cyzj': CyzjComponent,//创业租金
    'grdk': GrdkComponent,//个人贷款
    'qydk': QydkComponent//企业贷款
  };
  title: string;
  cmp: string;

  constructor(
    public router: Router,
    private modalSvc: NzModalService,
    private msgSvc: NzMessageService
  ) { }

  ngOnInit() {

  }

  showModal(cmp: string, title: string): void {
    this.cmp = cmp;
    this.title = title;
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  //读身份证
  readidcard() {
    const idcard = '321321198801087813';
    const modal = this.modalSvc.create({
      nzTitle: this.title,
      nzContent: this.cmpMap[this.cmp],
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
      nzContent: this.cmpMap[this.cmp],
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