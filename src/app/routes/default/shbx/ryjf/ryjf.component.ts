import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Renyuanjiaofei } from '@core/models/shehuibaoxian/renyuanjiaofei';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

/**
 * 人员缴费查询
 */
@Component({
  selector: 'app-ryjf',
  templateUrl: './ryjf.component.html',
  styleUrls: [
    './ryjf.component.less',
    '../../default.component.less'
  ]
})
export class RyjfComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '个人缴费信息';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Renyuanjiaofei[] = Array<Renyuanjiaofei>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  public personId: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shebaoka: ShebaokaService,
    private shehuibaoxian: ShehuibaoxianService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;

      /**获取个人编号 */
      this.shebaoka.getPersonId('', this.cardno, '').subscribe(bac => {
        this.personId = bac.data.bac001;
        if (this.personId) {
          // 检索数据
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
  searchData(reset?: boolean) {
    if (reset) {
      this.pageIndex = 1;
    }
    this.shehuibaoxian.getRenyuanjiaofei(this.personId, '', '', this.pageIndex, this.pageSize)
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
