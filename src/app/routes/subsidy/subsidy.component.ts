import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import { ReadcardComponent } from '../readcard/readcard.component';

@Component({
  selector: 'app-subsidy',
  templateUrl: './subsidy.component.html',
  styleUrls: ['./subsidy.component.less', '../routes.component.less']
})
export class SubsidyComponent implements OnInit {

  constructor(
    public router: Router,
    private modalSvc: NzModalService,
  ) { }

  ngOnInit() {
  }

  onClick() {
    const modal = this.modalSvc.create({
      nzTitle: '读卡',
      nzContent: ReadcardComponent,
      nzWidth: '70%',
      nzComponentParams: {

      },
      nzFooter: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadData();
    });
  }
}
