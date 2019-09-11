import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qydkdetails',
  templateUrl: './qydkdetails.component.html',
  styleUrls: ['./qydkdetails.component.less']
})
export class QydkdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
