import { Component, Input, OnInit } from '@angular/core';
import { Cailiao } from '@core/models/shehuidaiyu/cailiao';

@Component({
  selector: 'app-cailiao-info',
  templateUrl: './cailiao-info.component.html',
  styleUrls: ['./cailiao-info.component.less']
})
export class CailiaoInfoComponent implements OnInit {

  @Input()
  public data!: Cailiao;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
