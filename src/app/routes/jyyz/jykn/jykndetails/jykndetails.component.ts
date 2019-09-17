import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jykndetails',
  templateUrl: './jykndetails.component.html',
  styleUrls: ['./jykndetails.component.less']
})
export class JykndetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
