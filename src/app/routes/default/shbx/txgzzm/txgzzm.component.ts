import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Tuixiugongzi } from '@core/models/shehuidaiyu/tuixiugongzi';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';


@Component({
  selector: 'app-txgzzm',
  templateUrl: './txgzzm.component.html',
  styleUrls: ['./txgzzm.component.less',
    '../../default.component.less'
  ]
})
export class TxgzzmComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '退休工资证明';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Tuixiugongzi[] = Array<Tuixiugongzi>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  personId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shebaoka: ShebaokaService,
    private shehuidaiyu: ShehuidaiyuService
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
    this.shehuidaiyu.getTuiXiuGz(this.personId, '', this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
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
