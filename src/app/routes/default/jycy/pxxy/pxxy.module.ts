import { NgModule } from '@angular/core';
import { PxxyComponent } from './pxxy.component';
import { SharedModule } from '@shared';
import { PxxyRoutingModule } from './pxxy.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';



@NgModule({
  declarations: [
    PxxyComponent
  ],
  imports: [
    SharedModule,
    PxxyRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class PxxyModule { }
