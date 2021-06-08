import { Component, Input, OnInit } from '@angular/core';
import { Bukoufa } from '@core/models/shehuidaiyu/bukoufa';

@Component({
  selector: 'app-bkf-info',
  templateUrl: './bkf-info.component.html',
  styleUrls: ['./bkf-info.component.less']
})
export class BkfInfoComponent implements OnInit {

  @Input()
  public data!: Bukoufa;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
