import { NgModule } from '@angular/core';
import { PxdwComponent } from './pxdw.component';
import { PxdwInfoComponent } from './pxdw-info/pxdw-info.component';
import { SharedModule } from '@shared';
import { PxdwRoutingModule } from './pxdw.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    PxdwComponent,
    PxdwInfoComponent
  ],
  imports: [
    SharedModule,
    PxdwRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class PxdwModule { }
