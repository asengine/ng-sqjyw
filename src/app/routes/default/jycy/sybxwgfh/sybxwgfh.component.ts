import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Shiyebaoxianwengangfanhuan } from '@core/models/jiuguanzhongxin/shiyebaoxianwengangfanhuan';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';


@Component({
  selector: 'app-sybxwgfh',
  templateUrl: './sybxwgfh.component.html',
  styleUrls: ['./sybxwgfh.component.less',
    '../../default.component.less']
})
export class SybxwgfhComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '失业保险稳岗返还';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public data: Shiyebaoxianwengangfanhuan = new Shiyebaoxianwengangfanhuan();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  public personId: string = '';

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
          console.log(this.config);
        }
      });
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;

      /**获取个人编号 */
      this.shebaoka.getPersonId('', this.cardno, '').subscribe(bac => {
        this.personId = bac.data.bac001;
        if (this.personId) {
          this.searchData();
        }
      })
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
  searchData(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.jiuguanzhongxin.getShiyebaoxianwengangfanhuan(this.personId, '')
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
