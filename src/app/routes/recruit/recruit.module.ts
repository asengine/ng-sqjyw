import { NgModule } from '@angular/core';
import { RecruitComponent } from './recruit.component';
import { RecruitRoutingModule } from './recruit.routing.module';
import { RecruitService } from '../../core/services/recruit.service';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared';
import { AuthService } from 'src/app/core/services/auth.service';

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
    RecruitService,
    AuthService
  ]
})
export class RecruitModule { }
