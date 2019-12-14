import { Component, OnInit, Input } from '@angular/core';
import { SbbtdetailsComponent } from './sbbtdetails/sbbtdetails.component';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-sbbt',
  templateUrl: './sbbt.component.html',
  styleUrls: ['./sbbt.component.less']
})
export class SbbtComponent implements OnInit {

  @Input() idcard: string;//身份证号

  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
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
      this.subSvc
        .getSsListById(this.idcard, this.sortKey, this.sortValue, this.pageIndex, this.pageSize)
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
    this.recSvc.getSingle(id).subscribe((res) => {
      const modal = this.modalSvc.create({
        nzTitle: '个人社保补贴信息',
        nzContent: SbbtdetailsComponent,
        nzWidth: '70%',
        nzComponentParams: {
          data: res
        },
        nzFooter: null
      });
      modal.afterClose.subscribe(() => {
        // this.loadData();
      });
    });
  }
}
