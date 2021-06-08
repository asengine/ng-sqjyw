import { NgModule } from '@angular/core';
import { GyjbComponent } from './gyjb.component';
import { GyjbInfoComponent } from './gyjb-info/gyjb-info.component';
import { SharedModule } from '@shared';
import { GyjbRoutingModule } from './gyjb.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    GyjbComponent,
    GyjbInfoComponent
  ],
  imports: [
    SharedModule,
    GyjbRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GyjbModule { }
