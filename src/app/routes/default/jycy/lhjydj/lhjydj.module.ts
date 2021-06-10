import { NgModule } from '@angular/core';
import { LhjydjComponent } from './lhjydj.component';
import { SharedModule } from '@shared';
import { LhjydjRoutingModule } from './lhjydj.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    LhjydjComponent
  ],
  imports: [
    SharedModule,
    LhjydjRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class LhjydjModule { }
