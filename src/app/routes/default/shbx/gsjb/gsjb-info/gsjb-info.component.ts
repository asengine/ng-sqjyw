import { Component, Input, OnInit } from '@angular/core';
import { Gongshangjiben } from '@core/models/shehuidaiyu/gongshangjiben';

@Component({
  selector: 'app-gsjb-info',
  templateUrl: './gsjb-info.component.html',
  styleUrls: ['./gsjb-info.component.less']
})
export class GsjbInfoComponent implements OnInit {

  @Input()
  public data!: Gongshangjiben;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
