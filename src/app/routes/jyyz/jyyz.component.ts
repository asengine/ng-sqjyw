import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { JyknComponent } from './jykn/jykn.component';
import { SbbtComponent } from './sbbt/sbbt.component';

@Component({
  selector: 'app-jyyz',
  templateUrl: './jyyz.component.html',
  styleUrls: ['./jyyz.component.less', '../routes.component.less']
})
export class JyyzComponent implements OnInit {
  isVisible = false;
  cmpMap = {
    'jykn': JyknComponent,//就业困难人员信息查询
    'sbbt': SbbtComponent
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
