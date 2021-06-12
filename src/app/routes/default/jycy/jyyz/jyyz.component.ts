import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Params, Router } from '@angular/router';
import { Jiuyeyuanzhu } from '@core/models/jiuguanzhongxin/jiuyeyuanzhu';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';

@Component({
  selector: 'app-jyyz',
  templateUrl: './jyyz.component.html',
  styleUrls: ['./jyyz.component.less',
    '../../default.component.less']
})
export class JyyzComponent implements OnInit {

  public config: CountdownConfig = {
    format: `mm:ss`,
    leftTime: 180,
  };
  public loading = true; //正在加载数据
  /**身份证号码 */
  public cardno = '';
  public title = '就业援助';
  /// 分页参数
  public pageIndex = 1;
  public pageSize = 6;
  public total = 1;
  public listOfData: Jiuyeyuanzhu[] = new Array<Jiuyeyuanzhu>();
  public sortKey = 'AAE036';
  public sortValue = 'desc';
  /**个人编号 */
  public personId: string = '';
  /**姓名 */
  public aac003: string = '';
  /**身份证号 */
  public aac147: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private shebaoka: ShebaokaService,
    private shehuibaoxian: ShehuibaoxianService,
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

      /**获取个人编号 */
      this.shebaoka.getPersonId('', this.cardno, '')
        .subscribe(bac => {
          this.personId = bac.data.bac001;
          if (this.personId) {
            this.shehuibaoxian.getRenyuanjiben(this.personId, this.pageIndex, this.pageSize)
              .subscribe(info => {
                if (info && info.data.data.length > 0) {
                  this.aac003 = info.data.data[0].AAC003;
                  this.aac147 = info.data.data[0].AAC147;
                }
                setTimeout(() => {
                  this.searchData();
                }, 1);
              });
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
    this.jiuguanzhongxin.getJiuyeyuanzhu(this.aac003, this.aac147, '', '', '', '', '', '', '', this.pageIndex, this.pageSize)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.data.totalPage;// * this.pageSize;
        this.listOfData = res.data.data;
      });
  }

  /**
   * 
   * @param ROWNO
   */
  onClick(ROWNO: number) {
    // const data = this.listOfData.find(m => m.ALA059 === ala059);
    // const modal = this.modalSvc.create({
    //   nzTitle: '材料信息',
    //   nzContent: CailiaoInfoComponent,
    //   nzWidth: '90%',
    //   nzComponentParams: {
    //     data: data
    //   },
    //   nzFooter: null
    // });
    // modal.afterClose.subscribe(() => {
    //   // this.loadData();
    // });
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
