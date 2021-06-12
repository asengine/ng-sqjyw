import { NgModule } from '@angular/core';
import { JyygtglsComponent } from './jyygtgls.component';
import { SharedModule } from '@shared';
import { JyygtglsRoutingModule } from './jyygtgls.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    JyygtglsComponent
  ],
  imports: [
    SharedModule,
    JyygtglsRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class JyygtglsModule { }
