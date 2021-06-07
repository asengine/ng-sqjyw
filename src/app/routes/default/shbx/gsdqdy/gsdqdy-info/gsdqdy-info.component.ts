import { Component, Input, OnInit } from '@angular/core';
import { Gongshangdingqidaiyu } from '@core/models/shehuidaiyu/gongshangdingqidaiyu';

@Component({
  selector: 'app-gsdqdy-info',
  templateUrl: './gsdqdy-info.component.html',
  styleUrls: ['./gsdqdy-info.component.less']
})
export class GsdqdyInfoComponent implements OnInit {

  @Input()
  public data!: Gongshangdingqidaiyu;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
