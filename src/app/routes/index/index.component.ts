import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MacService } from 'src/app/core/services/mac.service';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';

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
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService
  ) {
    this.authSvc.authCheck().subscribe(res => {
      console.log(res);
      this.data = res;
    });


  }

  ngOnInit() {
    console.log(this.tokenService.get().token);
  }
}
