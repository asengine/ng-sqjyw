import { NgModule } from '@angular/core';
import { RyjcbgComponent } from './ryjcbg.component';
import { SharedModule } from '@shared';
import { RyjcbgRoutingModule } from './ryjcbg.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';

@NgModule({
  declarations: [
    RyjcbgComponent
  ],
  imports: [
    SharedModule,
    RyjcbgRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RyjcbgModule { }
