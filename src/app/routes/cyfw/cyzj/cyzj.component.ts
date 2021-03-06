import { Component, OnInit, Input } from '@angular/core';
import { CyzjdetailsComponent } from './cyzjdetails/cyzjdetails.component';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { RecruitService } from 'src/app/core/services/recruit.service';

@Component({
  selector: 'app-cyzj',
  templateUrl: './cyzj.component.html',
  styleUrls: ['./cyzj.component.less']
})
export class CyzjComponent implements OnInit {

  @Input() idcard: string = '';//身份证号

  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: any[] = [];
  sortKey = 'AAE036';
  sortValue = 'desc';

  loading = false;

  constructor(
    private subSvc: SubsidyService,
    private recSvc: RecruitService,
    private modalSvc: NzModalService
  ) { }

  ngOnInit() {
    console.log('身份账号：' + this.idcard);
    this.searchData();
  }

  sort(sort: any): void {
    console.log(sort);
    this.sortKey = sort.key;
    if (sort.value) {
      this.sortValue = sort.value.replace('end', '');
    }
    console.log(this.sortValue);
    this.searchData();
  }

  searchData(reset: boolean = false) {
    if (reset) {
      this.pageIndex = 1;
    }
    if (this.idcard) {
      this.subSvc
        .getRtListById(this.idcard, this.sortKey, this.sortValue, this.pageIndex, this.pageSize)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          this.total = res.Total;
          this.listOfData = res.Data;
        });
      // this.recSvc
      //   .getList(this.sortKey, this.sortValue, this.pageIndex, this.pageSize, '')
      //   .subscribe(res => {
      //     console.log(res);
      //     this.loading = false;
      //     this.total = res.Total;
      //     this.listOfData = res.Data;
      //   });
    }
  }

  onClick(id: number) {
    // this.subSvc.getRtSingle(id).subscribe((res) => {
    //   const modal = this.modalSvc.create({
    //     nzTitle: '创业租金信息',
    //     nzContent: CyzjdetailsComponent,
    //     nzWidth: '70%',
    //     nzComponentParams: {
    //       data: res
    //     },
    //     nzFooter: null
    //   });
    //   modal.afterClose.subscribe(() => {
    //     // this.loadData();
    //   });
    // });
  }
}
