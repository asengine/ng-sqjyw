import { Component, OnInit } from '@angular/core';
import { PxjgComponent } from './pxjg/pxjg.component';
import { PxcjComponent } from './pxcj/pxcj.component';
import { Router } from '@angular/router';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';
import { ReadCardService } from 'src/app/core/services/readcard.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.less', '../routes.component.less']
})
export class TrainingComponent implements OnInit {
  isVisible = false;
  cmpMap = {
    'pxcj': PxcjComponent //培训成绩
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

  showPxjg() {
    const modal = this.modalSvc.create({
      nzTitle: '培训机构',
      nzContent: PxjgComponent,
      nzWidth: '70%',
      nzComponentParams: {

      },
      nzFooter: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadData();
    });
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
    this.cardSvc.readIdCard().subscribe(res => {
      console.log(res);
      if (res.retcode === '0x90 0x1') {
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
      }
      else if (res.retcode === '0x1') {
        this.msgSvc.warning('身份证读卡器未连接');
      }
      else if (res.retcode === '0x41') {
        this.msgSvc.warning('请将身份证放至读卡器');
      }
      else {
        this.msgSvc.warning('未知错误');
      }
    }, error => {
      console.log(error);
      this.msgSvc.warning('读卡器服务未启动，请联系系统管理员。');
    });
  }

  //读社保卡
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
