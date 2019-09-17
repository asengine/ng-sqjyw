import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = '宿迁就业网';

  constructor(public router: Router) {

  }

  ngOnInit(): void {
    console.log(1);
  }

  goIndex() {
    this.router.navigateByUrl('/index');
  }

  back() {
    history.back();
  }
}
