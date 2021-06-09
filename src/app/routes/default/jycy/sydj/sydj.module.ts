import { NgModule } from '@angular/core';
import { SydjComponent } from './sydj.component';
import { SharedModule } from '@shared';
import { SydjRoutingModule } from './sydj.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';


@NgModule({
  declarations: [
    SydjComponent
  ],
  imports: [
    SharedModule,
    SydjRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class SydjModule { }
