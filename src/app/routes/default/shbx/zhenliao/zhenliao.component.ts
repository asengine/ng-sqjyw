import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Zhenliao } from '@core/models/shehuidaiyu/zhenliao';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { ZhenliaoInfoComponent } from './zhenliao-info/zhenliao-info.component';

/**
 * 诊疗项目信息
 */
@Component({
  selector: 'app-zhenliao',
  templateUrl: './zhenliao.component.html',
  styleUrls: ['./zhenliao.component.less',
    '../../default.component.less']
})
export class ZhenliaoComponent implements OnInit {


  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = false; //正在加载数据
  public title = '诊疗项目信息';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Zhenliao[] = Array<Zhenliao>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**材料编码 */
  public ala095: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private modalSvc: NzModalService,
    private shebaoka: ShebaokaService,
    private shehuidaiyu: ShehuidaiyuService
  ) {

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
    this.shehuidaiyu.getZhenliao(this.ala095, '', '', '', '', this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
      });
  }

  /**
   * 
   * @param ala095 材料编码
   */
  onClick(ala095: string) {
    const data = this.listOfData.find(m => m.ALA095 === ala095);
    const modal = this.modalSvc.create({
      nzTitle: '诊疗项目信息',
      nzContent: ZhenliaoInfoComponent,
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
