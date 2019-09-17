import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jbxxdetails',
  templateUrl: './jbxxdetails.component.html',
  styleUrls: ['./jbxxdetails.component.less']
})
export class JbxxdetailsComponent implements OnInit {
  @Input() data: any;
  constructor() { }

  ngOnInit() {
  }

}
