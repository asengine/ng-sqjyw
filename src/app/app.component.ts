import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.less',
    '../assets/fonts/BigruixianBlackGBV1.0/BigruixianBlackGBV1.0.css',
    '../assets/fonts/Alibaba-PuHuiTi-Regular/Alibaba-PuHuiTi-Regular.css',
    '../assets/fonts/Alibaba-PuHuiTi-Medium/Alibaba-PuHuiTi-Medium.css',
    '../assets/fonts/HelveticaNeueLTStd-BdExO/HelveticaNeueLTStd-BdExO.css'
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
