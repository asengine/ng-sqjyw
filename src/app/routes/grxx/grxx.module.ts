import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrxxComponent } from './grxx.component';
import { SharedModule } from 'src/app/shared';
import { GrxxRoutingModule } from './grxx.routing.module';
import { JbxxComponent } from './jbxx/jbxx.component';
import { JbxxdetailsComponent } from './jbxx/jbxxdetails/jbxxdetails.component';
import { JycyzComponent } from './jycyz/jycyz.component';
import { JycyzdetailsComponent } from './jycyz/jycyzdetails/jycyzdetails.component';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { LoanService } from 'src/app/core/services/loan.service';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { EmploymentService } from 'src/app/core/services/employment.service';
import { EmpCertService } from 'src/app/core/services/empcert.service';
import { ReadCardService } from 'src/app/core/services/readcard.service';
import { AuthService } from 'src/app/core/services/auth.service';



@NgModule({
  declarations: [
    GrxxComponent,
    JbxxComponent,
    JbxxdetailsComponent,
    JycyzComponent,
    JycyzdetailsComponent
  ],
  entryComponents: [
    JbxxComponent,
    JbxxdetailsComponent,
    JycyzComponent,
    JycyzdetailsComponent
  ],
  imports: [
    SharedModule,
    GrxxRoutingModule
  ],
  providers: [
    SubsidyService,
    LoanService,
    RecruitService,
    EmploymentService,
    EmpCertService,
    ReadCardService,
    AuthService
  ]
})
export class GrxxModule { }
