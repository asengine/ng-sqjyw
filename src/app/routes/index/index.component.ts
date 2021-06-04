import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MacService } from 'src/app/core/services/mac.service';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: [
    './index.component.less',
    '../routes.component.less'
  ]
})
export class IndexComponent implements OnInit {
  data!: string;

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
    window.open("http://sq.jszwfw.gov.cn", "_blank", "width=1240,height=900,scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes", false);
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
