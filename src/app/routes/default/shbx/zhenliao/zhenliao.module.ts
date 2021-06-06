import { NgModule } from '@angular/core';
import { ZhenliaoComponent } from './zhenliao.component';
import { SharedModule } from '@shared';
import { ZhenliaoRoutingModule } from './zhenliao.routing.module';
import { ZhenliaoInfoComponent } from './zhenliao-info/zhenliao-info.component';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { ShebaokaService } from '@core/services/shebaoka.service';


@NgModule({
  declarations: [
    ZhenliaoComponent,
    ZhenliaoInfoComponent
  ],
  entryComponents: [
    ZhenliaoInfoComponent
  ],
  imports: [
    SharedModule,
    ZhenliaoRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class ZhenliaoModule { }
