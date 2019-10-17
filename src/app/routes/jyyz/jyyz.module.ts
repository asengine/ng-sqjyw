import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JyyzComponent } from './jyyz.component';
import { JyyzRoutingModule } from './jyyz.routing.module';
import { SharedModule } from 'src/app/shared';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { LoanService } from 'src/app/core/services/loan.service';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { JyknComponent } from './jykn/jykn.component';
import { JykndetailsComponent } from './jykn/jykndetails/jykndetails.component';
import { SbbtComponent } from './sbbt/sbbt.component';
import { SbbtdetailsComponent } from './sbbt/sbbtdetails/sbbtdetails.component';
import { EmploymentService } from 'src/app/core/services/employment.service';
import { ReadCardService } from 'src/app/core/services/readcard.service';

@NgModule({
  declarations: [
    JyyzComponent,
    JyknComponent,
    JykndetailsComponent,
    SbbtComponent,
    SbbtdetailsComponent
  ],
  imports: [
    SharedModule,
    JyyzRoutingModule
  ],
  entryComponents: [
    JyknComponent,
    JykndetailsComponent,
    SbbtComponent,
    SbbtdetailsComponent
  ],
  providers: [
    SubsidyService,
    LoanService,
    RecruitService,
    EmploymentService,
    ReadCardService
  ]
})
export class JyyzModule { }
