import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { JbxxComponent } from './jbxx/jbxx.component';
import { JycyzComponent } from './jycyz/jycyz.component';

@Component({
  selector: 'app-grxx',
  templateUrl: './grxx.component.html',
  styleUrls: ['./grxx.component.less', '../routes.component.less']
})
export class GrxxComponent implements OnInit {

  isVisible = false;
  cmpMap = {
    'jbxx': JbxxComponent,//个人基本信息
    'jycyz': JycyzComponent //就业创业证
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
