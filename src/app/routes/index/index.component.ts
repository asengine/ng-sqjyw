import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less', '../routes.component.less']
})
export class IndexComponent implements OnInit {

  constructor(
    private authSvc: AuthService
  ) {
    this.authSvc.authCheck().subscribe(res => {
      console.log(res);
    });
  }

  ngOnInit() {

  }
}
