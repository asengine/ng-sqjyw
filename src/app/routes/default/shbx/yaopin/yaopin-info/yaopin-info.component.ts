import { Component, Input, OnInit } from '@angular/core';
import { Yaopin } from '@core/models/shehuidaiyu/yaopin';

@Component({
  selector: 'app-yaopin-info',
  templateUrl: './yaopin-info.component.html',
  styleUrls: ['./yaopin-info.component.less',
    '../../../default.component.less'
  ]
})
export class YaopinInfoComponent implements OnInit {

  @Input()
  public data!: Yaopin;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
