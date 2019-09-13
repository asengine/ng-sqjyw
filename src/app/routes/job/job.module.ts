import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobComponent } from './job.component';
import { JobRoutingModule } from './job.routing.module';
import { JobService } from 'src/app/core/services/job.service';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [JobComponent, DetailsComponent],
  imports: [
    SharedModule,
    JobRoutingModule
  ],
  entryComponents: [
    DetailsComponent
  ],
  providers: [
    JobService
  ]
})
export class JobModule { }
