import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { JbxxComponent } from './jbxx/jbxx.component';
import { JycyzComponent } from './jycyz/jycyz.component';
import { ReadCardService } from 'src/app/core/services/readcard.service';

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
    private cardSvc: ReadCardService,
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

  // 读身份证
  readidcard() {
    this.cardSvc.readIdCard().subscribe(res => {
      const modal = this.modalSvc.create({
        nzTitle: this.title,
        nzContent: this.cmpMap[this.cmp],
        nzWidth: '70%',
        nzComponentParams: {
          idcard: res
        },
        nzFooter: null
      });
      modal.afterClose.subscribe(() => {
        // this.loadData();
      });
    });
  }

  // 读社保卡
  readsicard() {
    this.cardSvc.readSiCard().subscribe(res => {
      const modal = this.modalSvc.create({
        nzTitle: this.title,
        nzContent: this.cmpMap[this.cmp],
        nzWidth: '70%',
        nzComponentParams: {
          sicard: res
        },
        nzFooter: null
      });
      modal.afterClose.subscribe(() => {
        // this.loadData();
      });
    });
  }
}
