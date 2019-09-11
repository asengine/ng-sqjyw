import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CyfwComponent } from './cyfw.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CyfwRoutingModule } from './cyfw.routing.module';
import { CybtComponent } from './cybt/cybt.component';
import { CyzjComponent } from './cyzj/cyzj.component';
import { SubsidyService } from 'src/app/core/services/subsidy.service';
import { LoanService } from 'src/app/core/services/loan.service';
import { RecruitService } from 'src/app/core/services/recruit.service';
import { CybtdetailsComponent } from './cybt/cybtdetails/cybtdetails.component';
import { CyzjdetailsComponent } from './cyzj/cyzjdetails/cyzjdetails.component';
import { GrdkComponent } from './grdk/grdk.component';
import { GrdkdetailsComponent } from './grdk/grdkdetails/grdkdetails.component';
import { QydkComponent } from './qydk/qydk.component';
import { QydkdetailsComponent } from './qydk/qydkdetails/qydkdetails.component';



@NgModule({
  declarations: [
    CyfwComponent,
    CybtComponent,
    CyzjComponent,
    CybtdetailsComponent,
    CyzjdetailsComponent,
    GrdkComponent,
    GrdkdetailsComponent,
    QydkComponent,
    QydkdetailsComponent
  ],
  imports: [
    SharedModule,
    CyfwRoutingModule
  ],
  entryComponents: [
    CybtComponent,//创业补贴
    CybtdetailsComponent,
    CyzjComponent, //创业租金,
    CyzjdetailsComponent,
    GrdkComponent,
    GrdkdetailsComponent,
    QydkComponent,
    QydkdetailsComponent
  ],
  providers: [
    SubsidyService,
    LoanService,
    RecruitService
  ]
})
export class CyfwModule { }
