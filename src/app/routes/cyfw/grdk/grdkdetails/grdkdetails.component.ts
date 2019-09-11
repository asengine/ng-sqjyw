import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grdkdetails',
  templateUrl: './grdkdetails.component.html',
  styleUrls: ['./grdkdetails.component.less']
})
export class GrdkdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
