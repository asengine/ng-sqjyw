import { NgModule } from '@angular/core';
import { BtffComponent } from './btff.component';
import { SharedModule } from '@shared';
import { BtffRoutingModule } from './btff.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';


@NgModule({
  declarations: [
    BtffComponent
  ],
  imports: [
    SharedModule,
    BtffRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class BtffModule { }
