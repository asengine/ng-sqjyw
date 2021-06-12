import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { PeiXunKaoHe } from '@core/models/jiuguanzhongxin/PeiXunKaoHe';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { PxkhInfoComponent } from './pxkh-info/pxkh-info.component';

@Component({
  selector: 'app-pxkh',
  templateUrl: './pxkh.component.html',
  styleUrls: ['./pxkh.component.less',
  '../../default.component.less']
})
export class PxkhComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  public title = '培训考核';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: PeiXunKaoHe[] = Array<PeiXunKaoHe>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**单位编号 */
  public bab001: string = '';
  /**班级编号 */
  public acf003: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalSvc: NzModalService,
    private shebaoka: ShebaokaService,
    private shehuidaiyu: JiuguanzhongxinService
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
    this.shehuidaiyu.getPeiXunKaoHe(this.bab001, this.acf003, this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
      });
  }

  /**
   * 
   * @param acf003 材料编码
   */
  onClick(acf003: string) {
    const data = this.listOfData.find(m => m.acf003 === acf003);
    const modal = this.modalSvc.create({
      nzTitle: '培训考核',
      nzContent: PxkhInfoComponent,
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
