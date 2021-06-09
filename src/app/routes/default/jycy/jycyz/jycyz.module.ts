import { NgModule } from '@angular/core';
import { JycyzComponent } from './jycyz.component';
import { SharedModule } from '@shared';
import { JycyzRoutingModule } from './jycyz.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    JycyzComponent
  ],
  imports: [
    SharedModule,
    JycyzRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class JycyzModule { }
