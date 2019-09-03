import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitComponent } from './recruit.component';
import { RecruitRoutingModule } from './recruit.routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RecruitService } from '../../core/services/recruit.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [RecruitComponent, DetailsComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RecruitRoutingModule
  ],
  entryComponents: [
    DetailsComponent
  ],
  providers: [
    RecruitService
  ]
})
export class RecruitModule { }
