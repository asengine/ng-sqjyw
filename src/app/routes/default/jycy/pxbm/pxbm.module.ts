import { NgModule } from '@angular/core';
import { PxbmComponent } from './pxbm.component';
import { PxbmInfoComponent } from './pxbm-info/pxbm-info.component';
import { SharedModule } from '@shared';
import { PxbmRoutingModule } from './pxbm.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';


@NgModule({
  declarations: [
    PxbmComponent,
    PxbmInfoComponent
  ],
  imports: [
    SharedModule,
    PxbmRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class PxbmModule { }
