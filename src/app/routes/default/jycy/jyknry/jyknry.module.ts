import { NgModule } from '@angular/core';
import { JyknryComponent } from './jyknry.component';
import { SharedModule } from '@shared';
import { JyknryRoutingModule } from './jyknry.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';


@NgModule({
  declarations: [
    JyknryComponent
  ],
  imports: [
    SharedModule,
    JyknryRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class JyknryModule { }
