import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Yaopin } from '@core/models/shehuidaiyu/yaopin';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { YaopinInfoComponent } from './yaopin-info/yaopin-info.component';

/**
 * 药品信息
 */
@Component({
  selector: 'app-yaopin',
  templateUrl: './yaopin.component.html',
  styleUrls: ['./yaopin.component.less',
    '../../default.component.less']
})
export class YaopinComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  public title = '药品信息';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Yaopin[] = Array<Yaopin>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**药品商品名编码 */
  public ala002: string = '';

  constructor(
    private router: Router,
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
    console.log(reset);
    if (reset) {
      this.pageIndex = 1;
    }
    this.shehuidaiyu.getYaopin(this.ala002, '', '', '', '', '', '', this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
      });
  }

  /**
   * 
   * @param ala002 药品商品编码
   */
  onClick(ala002: string) {
    const data = this.listOfData.find(m => m.ALA002 === ala002);
    const modal = this.modalSvc.create({
      nzTitle: '药品信息',
      nzContent: YaopinInfoComponent,
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
