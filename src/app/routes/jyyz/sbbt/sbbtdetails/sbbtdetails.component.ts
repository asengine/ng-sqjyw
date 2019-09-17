import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sbbtdetails',
  templateUrl: './sbbtdetails.component.html',
  styleUrls: ['./sbbtdetails.component.less']
})
export class SbbtdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
