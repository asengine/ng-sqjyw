import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainingComponent } from './training.component';
import { SharedModule } from 'src/app/shared';
import { TrainingRoutingModule } from './training.routing.module';
import { PxjgComponent } from './pxjg/pxjg.component';
import { PxjgdetailsComponent } from './pxjg/pxjgdetails/pxjgdetails.component';
import { PxcjComponent } from './pxcj/pxcj.component';
import { PxcjdetailsComponent } from './pxcj/pxcjdetails/pxcjdetails.component';
import { TrainingService } from 'src/app/core/services/training.service';
import { ReadCardService } from 'src/app/core/services/readcard.service';



@NgModule({
  declarations: [
    TrainingComponent,
    PxjgComponent,
    PxjgdetailsComponent,
    PxcjComponent,
    PxcjdetailsComponent
  ],
  entryComponents: [
    PxjgComponent,
    PxjgdetailsComponent,
    PxcjComponent,
    PxcjdetailsComponent
  ],
  imports: [
    SharedModule,
    TrainingRoutingModule
  ],
  providers: [
    TrainingService,
    ReadCardService
  ]
})
export class TrainingModule { }
