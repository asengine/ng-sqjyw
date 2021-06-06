import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Renyuanjiaofeijishu } from '@core/models/shehuibaoxian/Renyuanjiaofeijishu';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

/**
 * 人员缴费基数
 */
@Component({
  selector: 'app-ryjfjs',
  templateUrl: './ryjfjs.component.html',
  styleUrls: [
    './ryjfjs.component.less',
    '../../default.component.less'
  ]
})
export class RyjfjsComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '个人缴费基数信息';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Renyuanjiaofeijishu[] = Array<Renyuanjiaofeijishu>();
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
    private shehuibaoxian: ShehuibaoxianService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.cardno = params.cardno;

      /**获取个人编号 */
      this.shebaoka.getPersonId('', this.cardno, '').subscribe(bac => {
        this.personId = bac.data.bac001;
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
    this.loading = true;
    console.log(this.bab001);
    if (reset) {
      this.pageIndex = 1;
    }
    this.shehuibaoxian.getRenyuanjiaofeijishu(this.personId, this.bab001, this.pageIndex, this.pageSize)
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
