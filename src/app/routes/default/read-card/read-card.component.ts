import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReadCardService } from '@core/services/readcard.service';
import { NzMessageService } from 'ng-zorro-antd/message';

/**
 * 选择读卡方式
 */
@Component({
  selector: 'app-read-card',
  templateUrl: './read-card.component.html',
  styleUrls: [
    './read-card.component.less',
    '../default.component.less'
  ]
})
export class ReadCardComponent implements OnInit {
  private url: string;
  public title: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleSvc: Title,
    private msgSvc: NzMessageService,
    private cardSvc: ReadCardService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.url = params.url;
      this.title = params.title;
      console.log(this.title);
      this.titleSvc.setTitle(this.title);
    });
  }

  //读身份证
  readIdCard() {
    console.log('读身份证');
    //TEST
    this.router.navigate([`/default/${this.url}`], {
      queryParams: {
        cardno: '321321198801087813'
      }
    });

    // 正式
    // this.cardSvc.readIdCard().subscribe(res => {
    //   console.log(res);
    //   if (res.retcode === '0x90 0x1') {
    //     this.router.navigate([`/default/${this.url}`], {
    //       queryParams: {
    //         cardno: res.cardno
    //       }
    //     });
    //   }

    //   else if (res.retcode === '0x1') {
    //     this.msgSvc.warning('身份证读卡器未连接');
    //   }
    //   else if (res.retcode === '0x41') {
    //     this.msgSvc.warning('请将身份证放至读卡器');
    //   }
    //   else {
    //     this.msgSvc.warning(res.retmsg);
    //   }
    // }, error => {
    //   console.log(error);
    //   this.msgSvc.warning('读卡器服务未启动，请联系系统管理员。');
    // });
  }

  //读社保卡
  readSiCard() {
    console.log('读社保卡');
    this.cardSvc.readSiCard().subscribe(res => {
      this.router.navigate([this.url], {
        queryParams: {
          cardno: res
        }
      });
    }, error => {
      console.log(error);
      this.msgSvc.warning('读卡器服务未启动，请联系系统管理员。');
    });
  }

  //扫二维码
  scanCode() {
    console.log('扫二维码');
  }

  back() {
    history.back();
  }
}
