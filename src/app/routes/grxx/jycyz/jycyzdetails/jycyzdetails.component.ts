import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jycyzdetails',
  templateUrl: './jycyzdetails.component.html',
  styleUrls: ['./jycyzdetails.component.less']
})
export class JycyzdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
