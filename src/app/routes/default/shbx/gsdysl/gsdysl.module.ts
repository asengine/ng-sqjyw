import { NgModule } from '@angular/core';
import { GsdyslComponent } from './gsdysl.component';
import { GsdyslInfoComponent } from './gsdysl-info/gsdysl-info.component';
import { SharedModule } from '@shared';
import { GsdyslRoutingModule } from './gsdysl.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';


@NgModule({
  declarations: [
    GsdyslComponent,
    GsdyslInfoComponent
  ],
  imports: [
    SharedModule,
    GsdyslRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GsdyslModule { }
