import { NgModule } from '@angular/core';
import { LhjyrysbbtComponent } from './lhjyrysbbt.component';
import { SharedModule } from '@shared';
import { LhjyrysbbtRoutingModule } from './lhjyrysbbt.routing.module';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';
import { ShebaokaService } from '@core/services/shebaoka.service';

@NgModule({
  declarations: [
    LhjyrysbbtComponent
  ],
  imports: [
    SharedModule,
    LhjyrysbbtRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class LhjyrysbbtModule { }
