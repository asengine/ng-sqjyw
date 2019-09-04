import { NgModule } from '@angular/core';
import { SubsidyComponent } from '../subsidy/subsidy.component';
import { SharedModule } from 'src/app/shared';
import { SubsidyRoutingModule } from './subsidy.routing.module';
import { BsComponent } from './bs/bs.component';
import { ReadcardComponent } from '../readcard/readcard.component';



@NgModule({
  declarations: [SubsidyComponent, BsComponent],
  imports: [
    SharedModule,
    SubsidyRoutingModule
  ]
})
export class SubsidyModule { }
