import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { DetailsComponent } from './details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.less', '../routes.component.less']
})
export class JobComponent implements OnInit {
  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
  sortKey = 'AAE030';
  sortValue = 'desc';
  key = '';

  loading = false;

  constructor(
    public router: Router,
    private svc: JobService,
    private modalSvc: NzModalService,
  ) {

  }

  ngOnInit() {
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

  searchData(reset: boolean = false): void {
    console.log(this.key);
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.svc
      .getList(this.sortKey, this.sortValue, this.pageIndex, this.pageSize, this.key)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.total = res.Total;
        this.listOfData = res.Data;
      });
  }

  onClick(id: number) {
    this.svc.getSingle(id).subscribe((res) => {
      const modal = this.modalSvc.create({
        nzTitle: '招聘会信息',
        nzContent: DetailsComponent,
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

  onBack() {
    this.router.navigateByUrl('/index')
  }
}
