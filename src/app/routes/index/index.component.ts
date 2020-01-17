import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MacService } from 'src/app/core/services/mac.service';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { NzModalService } from 'ng-zorro-antd';
import { JszwfwComponent } from './jszwfw/jszwfw.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less', '../routes.component.less']
})
export class IndexComponent implements OnInit {
  data: string;

  constructor(
    private authSvc: AuthService,
    private macSvc: MacService,
    private modalSvc: NzModalService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.authSvc.authCheck().subscribe(res => {
      console.log(res);
    }, (e) => {
      console.log(e);
    });
  }

  ngOnInit() {
    // console.log(this.tokenService.get().token);
  }

  onClick() {
    window.open('http://sq.jszwfw.gov.cn', '政务不见面审批', 'height=900, width=1240, top=0, left=0, toolbar=no, menubar=no, scrollbars=no, resizable=no, location=no, status=no');
    // const modal = this.modalSvc.create({
    //   nzTitle: '政务不见面审批',
    //   nzContent: JszwfwComponent,
    //   nzWidth: '90%',
    //   nzFooter: null
    // });
    // modal.afterClose.subscribe(() => {
    //   // this.loadData();
    // });
  }
}
