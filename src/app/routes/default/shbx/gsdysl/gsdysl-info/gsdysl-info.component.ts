import { Component, Input, OnInit } from '@angular/core';
import { Gongshangdaiyushouli } from '@core/models/shehuidaiyu/gongshangdaiyushouli';

@Component({
  selector: 'app-gsdysl-info',
  templateUrl: './gsdysl-info.component.html',
  styleUrls: ['./gsdysl-info.component.less']
})
export class GsdyslInfoComponent implements OnInit {

  @Input()
  public data!: Gongshangdaiyushouli;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
