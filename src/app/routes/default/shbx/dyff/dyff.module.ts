import { NgModule } from '@angular/core';
import { DyffComponent } from './dyff.component';
import { SharedModule } from '@shared';
import { DyffRoutingModule } from './dyff.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';



@NgModule({
  declarations: [
    DyffComponent
  ],
  imports: [
    SharedModule,
    DyffRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class DyffModule { }
