import { NgModule } from '@angular/core';
import { RyjbxxComponent } from './ryjbxx.component';
import { RyjbxxRoutingModule } from './ryjbxx.routing.module';
import { SharedModule } from '@shared';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';
import { ShebaokaService } from '@core/services/shebaoka.service';

@NgModule({
  declarations: [
    RyjbxxComponent
  ],
  imports: [
    SharedModule,
    RyjbxxRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RyjbxxModule { }
