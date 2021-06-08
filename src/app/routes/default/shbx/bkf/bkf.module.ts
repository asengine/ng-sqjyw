import { NgModule } from '@angular/core';
import { BkfComponent } from './bkf.component';
import { BkfInfoComponent } from './bkf-info/bkf-info.component';
import { SharedModule } from '@shared';
import { BkfRoutingModule } from './bkf.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';


@NgModule({
  declarations: [
    BkfComponent,
    BkfInfoComponent
  ],
  imports: [
    SharedModule,
    BkfRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class BkfModule { }
