import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { XiaoWeiQiYeXiNaGaoXiaoBiyeShengSheBaoBuTie } from '@core/models/jiuguanzhongxin/XiaoWeiQiYeXiNaGaoXiaoBiyeShengSheBaoBuTie';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-xwqyxngxbyssbbt',
  templateUrl: './xwqyxngxbyssbbt.component.html',
  styleUrls: ['./xwqyxngxbyssbbt.component.less',
    '../../default.component.less']
})
export class XwqyxngxbyssbbtComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  public title = '小微企业吸纳高校毕业生社保补贴';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: XiaoWeiQiYeXiNaGaoXiaoBiyeShengSheBaoBuTie[] = Array<XiaoWeiQiYeXiNaGaoXiaoBiyeShengSheBaoBuTie>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**单位编码 */
  public bab001: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalSvc: NzModalService,
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
    console.log(reset);
    if (reset) {
      this.pageIndex = 1;
    }
    this.jiuguanzhongxin.getXiaoWeiQiYeXiNaGaoXiaoBiyeShengSheBaoBuTie(this.bab001, '')
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        //this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data;
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
