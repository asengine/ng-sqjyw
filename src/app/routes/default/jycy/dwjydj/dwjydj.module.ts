import { NgModule } from '@angular/core';
import { DwjydjComponent } from './dwjydj.component';
import { SharedModule } from '@shared';
import { DwjydjRoutingModule } from './dwjydj.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    DwjydjComponent
  ],
  imports: [
    SharedModule,
    DwjydjRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class DwjydjModule { }
