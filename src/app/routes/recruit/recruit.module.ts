import { NgModule } from '@angular/core';
import { RecruitComponent } from './recruit.component';
import { RecruitRoutingModule } from './recruit.routing.module';
import { RecruitService } from '../../core/services/recruit.service';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [RecruitComponent, DetailsComponent],
  imports: [
    SharedModule,
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
