import { NgModule } from '@angular/core';
import { DwxnjyknrysbbtComponent } from './dwxnjyknrysbbt.component';
import { SharedModule } from '@shared';
import { DwxnjyknrysbbtRoutingModule } from './dwxnjyknrysbbt.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';



@NgModule({
  declarations: [
    DwxnjyknrysbbtComponent
  ],
  imports: [
    SharedModule,
    DwxnjyknrysbbtRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class DwxnjyknrysbbtModule { }
