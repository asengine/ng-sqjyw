import { NgModule } from '@angular/core';
import { GrffbgComponent } from './grffbg.component';
import { SharedModule } from '@shared';
import { GrffbgRoutingModule } from './grffbg.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';



@NgModule({
  declarations: [
    GrffbgComponent
  ],
  imports: [
    SharedModule,
    GrffbgRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GrffbgModule { }
