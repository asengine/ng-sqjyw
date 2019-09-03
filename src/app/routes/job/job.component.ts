import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/core/services/job.service';
import { NzMessageService, NzModalService } from 'ng-zorro-antd';
import { DetailsComponent } from './details/details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.less', '../../app.component.less']
})
export class JobComponent implements OnInit {
  /// 分页参数
  pageIndex = 1;
  pageSize = 10;
  total = 1;
  listOfData = [];
  loading = false;
  sortKey = "AAE030";
  sortValue = "desc";
  filterGender = [{ text: 'male', value: 'male' }, { text: 'female', value: 'female' }];
  searchGenderList: string[] = [];
  editingRow: any;

  constructor(
    public router: Router,
    private svc: JobService,
    private modalSrv: NzModalService,
    public message: NzMessageService
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
    if (reset) {
      this.pageIndex = 1;
    }
    this.loading = true;
    this.svc
      .getList(this.sortKey, this.sortValue, this.pageIndex, this.pageSize, '')
      .subscribe(res => {
        this.loading = false;
        this.total = res.Total;
        this.listOfData = res.Data;
        // this.message.success("查询成功");
      });
  }

  updateFilter(value: string[]): void {
    this.searchGenderList = value;
    this.searchData(true);
  }

  onClick(id: number) {
    this.svc.getSingle(id).subscribe((res) => {
      const modal = this.modalSrv.create({
        nzTitle: '岗位信息',
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
