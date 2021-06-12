import { Component, Input, OnInit } from '@angular/core';
import { PeiXunKaoHe } from '@core/models/jiuguanzhongxin/PeiXunKaoHe';

@Component({
  selector: 'app-pxkh-info',
  templateUrl: './pxkh-info.component.html',
  styleUrls: ['./pxkh-info.component.less']
})
export class PxkhInfoComponent implements OnInit {


  @Input()
  public data!: PeiXunKaoHe;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}