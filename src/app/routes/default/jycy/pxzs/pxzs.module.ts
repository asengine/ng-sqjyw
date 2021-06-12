import { NgModule } from '@angular/core';
import { PxzsComponent } from './pxzs.component';
import { SharedModule } from '@shared';
import { PxzsRoutingModule } from './pxzs.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';



@NgModule({
  declarations: [
    PxzsComponent
  ],
  imports: [
    SharedModule,
    PxzsRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class PxzsModule { }
