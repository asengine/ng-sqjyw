import { Component, OnInit, Input } from '@angular/core';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { NzModalService } from 'ng-zorro-antd';
import { EmploymentService } from 'src/app/core/services/employment.service';
import { InsuranceService } from 'src/app/core/services/insurance.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  @Input() idcard: string;//身份证号
  @Input() sicard: string;//社保卡号

  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
  sortKey = 'AAE036';
  sortValue = 'desc';

  loading = false;

  constructor(
    private empSvc: InsuranceService,
    private modalSvc: NzModalService
  ) { }

  ngOnInit() {
    console.log('身份账号：' + this.idcard);
    console.log('社保卡号：' + this.sicard);
    this.searchData();
  }

  sort(sort: { key: string; value: string }): void {
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
      this.empSvc
        .getListById(this.idcard, this.sortKey, this.sortValue, this.pageIndex, this.pageSize)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          this.total = res.Total;
          this.listOfData = res.Data;
        });
    }
    else {
      this.empSvc
        .getListBySi(this.sicard, this.sortKey, this.sortValue, this.pageIndex, this.pageSize)
        .subscribe(res => {
          console.log(res);
          this.loading = false;
          this.total = res.Total;
          this.listOfData = res.Data;
        });
    }
  }

  onClick(id: number) {
    // this.recSvc.getSingle(id).subscribe((res) => {
    //   const modal = this.modalSvc.create({
    //     nzTitle: '就业困难人员信息',
    //     nzContent: JykndetailsComponent,
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
