import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JyyzComponent } from './jyyz.component';
import { JyyzRoutingModule } from './jyyz.routing.module';
import { SharedModule } from 'src/app/shared';
import { CybtComponent } from './cybt/cybt.component';
import { CyzjComponent } from './cyzj/cyzj.component';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { LoanService } from 'src/app/core/services/loan.service';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { DetailsComponent } from './cybt/details/details.component';



@NgModule({
  declarations: [JyyzComponent, CybtComponent, CyzjComponent],
  imports: [
    SharedModule,
    JyyzRoutingModule
  ],
  entryComponents: [
    CybtComponent,
    CyzjComponent
  ],
  providers: [
    SubsidyService,
    LoanService,
    RecruitService
  ]
})
export class JyyzModule { }
