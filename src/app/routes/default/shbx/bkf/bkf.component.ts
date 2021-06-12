import { formatDate } from '@angular/common';
import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Bukoufa } from '@core/models/shehuidaiyu/bukoufa';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { BkfInfoComponent } from './bkf-info/bkf-info.component';

@Component({
  selector: 'app-bkf',
  templateUrl: './bkf.component.html',
  styleUrls: ['./bkf.component.less',
    '../../default.component.less']
})
export class BkfComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '补扣发';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Bukoufa[] = Array<Bukoufa>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  public personId: string = '';
  /**结算期 */
  public date: Date;
  public aae002: string = ''

  constructor(
    private router: Router,
    @Inject(LOCALE_ID) private locale: string,
    private activatedRoute: ActivatedRoute,
    private modalSvc: NzModalService,
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
        // if (this.personId) {
        //   this.searchData();
        // }
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
    this.loading = true;
    console.log(this.date);
    // const year = this.date.getFullYear();
    // const month = this.date.getMonth() + 1;
    // const day = this.date.getDate();
    // console.log(`${year}${month}${day}`);
    console.log(formatDate(this.date, 'yyyyMMdd', this.locale));

    this.aae002 = formatDate(this.date, 'yyyyMMdd', this.locale);

    if (reset) {
      this.pageIndex = 1;
    }
    this.shehuidaiyu.getBukoufa(this.personId, '', this.aae002, this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
      });
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  /**
   * 
   * @param ROWNO 行编号
   */
  onClick(ROWNO: number) {
    const data = this.listOfData.find(m => m.ROWNO === ROWNO);
    const modal = this.modalSvc.create({
      nzTitle: '补扣发',
      nzContent: BkfInfoComponent,
      nzWidth: '90%',
      nzComponentParams: {
        data: data
      },
      nzFooter: null
    });
    modal.afterClose.subscribe(() => {
      // this.loadData();
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
