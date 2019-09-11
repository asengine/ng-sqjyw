import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cyzjdetails',
  templateUrl: './cyzjdetails.component.html',
  styleUrls: ['./cyzjdetails.component.less']
})
export class CyzjdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
