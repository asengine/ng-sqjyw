import { Component, Input, OnInit } from '@angular/core';
import { Zhenliao } from '@core/models/shehuidaiyu/zhenliao';

@Component({
  selector: 'app-zhenliao-info',
  templateUrl: './zhenliao-info.component.html',
  styleUrls: ['./zhenliao-info.component.less']
})
export class ZhenliaoInfoComponent implements OnInit {


  @Input()
  public data!: Zhenliao;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
