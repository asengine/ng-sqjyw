import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { MacService } from 'src/app/core/services/mac.service';

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
  ) {
    this.authSvc.authCheck().subscribe(res => {
      console.log(res);
      this.data = res;
    });
  }

  ngOnInit() {

  }
}
