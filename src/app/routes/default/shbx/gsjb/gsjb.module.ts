import { NgModule } from '@angular/core';
import { GsjbComponent } from './gsjb.component';
import { GsjbInfoComponent } from './gsjb-info/gsjb-info.component';
import { SharedModule } from '@shared';
import { GsjbRoutingModule } from './gsjb.routing.modue';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';


@NgModule({
  declarations: [
    GsjbComponent,
    GsjbInfoComponent
  ],
  entryComponents: [
    GsjbInfoComponent
  ],
  imports: [
    SharedModule,
    GsjbRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GsjbModule { }
