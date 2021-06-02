import { NgModule } from '@angular/core';
import { RcfwComponent } from './rcfw.component';
import { RcfwRoutingModule } from './rcfw.routing.module';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    RcfwComponent
  ],
  imports: [
    SharedModule,
    RcfwRoutingModule
  ]
})
export class RcfwModule { }
