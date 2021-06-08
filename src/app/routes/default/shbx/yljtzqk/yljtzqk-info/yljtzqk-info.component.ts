import { Component, Input, OnInit } from '@angular/core';
import { Yanglaojin } from '@core/models/shehuidaiyu/yanglaojin';

@Component({
  selector: 'app-yljtzqk-info',
  templateUrl: './yljtzqk-info.component.html',
  styleUrls: ['./yljtzqk-info.component.less']
})
export class YljtzqkInfoComponent implements OnInit {

  @Input()
  public data!: Yanglaojin;
  public loading = true;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }

}
