import { Component, Input, OnInit } from '@angular/core';
import { Gongshangdaiyu } from '@core/models/shehuidaiyu/gongshangdaiyu';

@Component({
  selector: 'app-gsdyzf-info',
  templateUrl: './gsdyzf-info.component.html',
  styleUrls: ['./gsdyzf-info.component.less']
})
export class GsdyzfInfoComponent implements OnInit {

  @Input()
  public data!: Gongshangdaiyu;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
