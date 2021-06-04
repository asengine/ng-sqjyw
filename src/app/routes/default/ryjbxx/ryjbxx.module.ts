import { NgModule } from '@angular/core';
import { RyjbxxComponent } from './ryjbxx.component';
import { RyjbxxRoutingModule } from './ryjbxx.routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    RyjbxxComponent
  ],
  imports: [
    SharedModule,
    RyjbxxRoutingModule
  ]
})
export class RyjbxxModule { }
