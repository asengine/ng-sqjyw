import { NgModule } from '@angular/core';
import { JyyzComponent } from './jyyz.component';
import { SharedModule } from '@shared';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { JyyzRoutingModule } from './jyyz.routing.module';

@NgModule({
  declarations: [
    JyyzComponent
  ],
  imports: [
    SharedModule,
    JyyzRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService,
    JiuguanzhongxinService
  ]
})
export class JyyzModule { }
