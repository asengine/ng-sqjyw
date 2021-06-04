import { NgModule } from '@angular/core';
import { RyjfComponent } from './ryjf.component';
import { SharedModule } from '@shared';
import { RyjfRoutingModule } from './ryjf.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';


@NgModule({
  declarations: [
    RyjfComponent
  ],
  imports: [
    SharedModule,
    RyjfRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RyjfModule { }
