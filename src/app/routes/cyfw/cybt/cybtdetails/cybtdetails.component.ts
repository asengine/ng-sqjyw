import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cybtdetails',
  templateUrl: './cybtdetails.component.html',
  styleUrls: ['./cybtdetails.component.less']
})
export class CybtdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
