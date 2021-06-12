import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { PeiXunDanwei } from '@core/models/jiuguanzhongxin/PeiXunDanwei';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-pxdw',
  templateUrl: './pxdw.component.html',
  styleUrls: ['./pxdw.component.less',
    '../../default.component.less']
})
export class PxdwComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '培训单位信息';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public data: PeiXunDanwei = new PeiXunDanwei();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  public personId: string = '';
  /**单位编号 */
  public bab001: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shebaoka: ShebaokaService,
    private jiuguanzhongxin: JiuguanzhongxinService
  ) {
    //每次进入路由重置倒计时
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.config = {
            format: `mm:ss`,
            leftTime: 180,
          };
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;

    });
  }

  /**排序 */
  sort(sort: any): void {
    console.log(sort);
    this.sortKey = sort.key;
    if (sort.value) {
      this.sortValue = sort.value.replace('end', '');
    }
    console.log(this.sortValue);
    // setTimeout(() => {
    //   this.searchData();
    // }, 1);
  }

  /**检索数据 */
  searchData(reset?: boolean) {
    this.loading = true;
    if (reset) {
      this.pageIndex = 1;
    }
    this.jiuguanzhongxin.getPeiXunDanwei(this.bab001, '')
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        //this.total = res.data.totalCount;// * this.pageSize;
        this.data = res.data;
      });
  }

  /**倒计时事件 */
  handleEvent(event: CountdownEvent) {
    console.log(event);
    if (event.action === 'done') {
      this.router.navigate([`/index`]);
    }
  }

  back() {
    history.back();
  }

}
