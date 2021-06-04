import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less',
    '../assets/font/BigruixianBlackGBV1.0/BigruixianBlackGBV1.0.css',
    '../assets/font/Alibaba-PuHuiTi-Regular/Alibaba-PuHuiTi-Regular.css',
    '../assets/font/Alibaba-PuHuiTi-Medium/Alibaba-PuHuiTi-Medium.css'
  ]
})
export class AppComponent {
  title = '宿迁就业网';

  constructor(public router: Router) {

  }

  ngOnInit(): void {

  }

  goIndex() {
    this.router.navigateByUrl('/index');
  }

  back() {
    history.back();
  }
}
