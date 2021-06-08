import { Component, Input, OnInit } from '@angular/core';
import { Gongyangjiben } from '@core/models/shehuidaiyu/gongyangjiben';

@Component({
  selector: 'app-gyjb-info',
  templateUrl: './gyjb-info.component.html',
  styleUrls: ['./gyjb-info.component.less']
})
export class GyjbInfoComponent implements OnInit {

  @Input()
  public data!: Gongyangjiben;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
