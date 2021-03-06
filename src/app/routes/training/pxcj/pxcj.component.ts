import { Component, OnInit, Input } from '@angular/core';
import { TrainingService } from 'src/app/core/services/training.service';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-pxcj',
  templateUrl: './pxcj.component.html',
  styleUrls: ['./pxcj.component.less']
})
export class PxcjComponent implements OnInit {

  @Input() idcard: string = '';//身份证号

  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData: any[] = [];
  sortKey = 'AAE036';
  sortValue = 'desc';
  key = '';

  loading = false;

  constructor(
    private trnSvc: TrainingService,
    private modalSvc: NzModalService
  ) { }

  ngOnInit() {
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
      this.trnSvc
        .getGradeListById(this.idcard, this.sortKey, this.sortValue, this.pageIndex, this.pageSize)
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
