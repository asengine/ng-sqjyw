import { Component, Input, OnInit } from '@angular/core';
import { PeiXunBaoMing } from '@core/models/jiuguanzhongxin/PeiXunBaoMing';

@Component({
  selector: 'app-pxbm-info',
  templateUrl: './pxbm-info.component.html',
  styleUrls: ['./pxbm-info.component.less']
})
export class PxbmInfoComponent implements OnInit {


  @Input()
  public data!: PeiXunBaoMing;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
