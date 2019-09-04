import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-readcard',
  templateUrl: './readcard.component.html',
  styleUrls: ['./readcard.component.less', '../routes.component.less']
})
export class ReadcardComponent implements OnInit {
  url: string;
  idcard: string;
  sicard: string;

  constructor(
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      // 获取路由传进的参数
      if (params.url) {
        this.url = params.url;
      }
      console.log(this.url)
    });
  }

  ngOnInit() {

  }

  //读身份证
  readidcard() {
    this.idcard = '321321198801087813';
    this.router.navigateByUrl(this.url, { queryParams: { 'idcard': this.idcard } });
  }

  //读社保卡
  readsicard() {
    this.sicard = '321321198801087813';
    this.router.navigateByUrl(this.url, { queryParams: { 'sicard': this.sicard } });
  }
}
