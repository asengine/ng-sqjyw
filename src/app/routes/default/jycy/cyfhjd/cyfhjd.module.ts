import { NgModule } from '@angular/core';
import { CyfhjdComponent } from './cyfhjd.component';
import { SharedModule } from '@shared';
import { CyfhjdRoutingModule } from './cyfhjd.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';


@NgModule({
  declarations: [
    CyfhjdComponent
  ],
  imports: [
    SharedModule,
    CyfhjdRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class CyfhjdModule { }
