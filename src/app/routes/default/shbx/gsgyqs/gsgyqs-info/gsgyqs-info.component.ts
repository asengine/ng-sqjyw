import { Component, Input, OnInit } from '@angular/core';
import { Gongshanggongyang } from '@core/models/shehuidaiyu/gongshanggongyang';

@Component({
  selector: 'app-gsgyqs-info',
  templateUrl: './gsgyqs-info.component.html',
  styleUrls: ['./gsgyqs-info.component.less']
})
export class GsgyqsInfoComponent implements OnInit {

  @Input()
  public data!: Gongshanggongyang;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
