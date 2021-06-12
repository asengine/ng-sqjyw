import { NgModule } from '@angular/core';
import { PxkhComponent } from './pxkh.component';
import { PxkhInfoComponent } from './pxkh-info/pxkh-info.component';
import { SharedModule } from '@shared';
import { PxkhRoutingModule } from './pxkh.routing.module';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';

@NgModule({
  declarations: [
    PxkhComponent,
    PxkhInfoComponent
  ],
  imports: [
    SharedModule,
    PxkhRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class PxkhModule { }
