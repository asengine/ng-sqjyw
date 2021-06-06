import { NgModule } from '@angular/core';
import { RyjfjsComponent } from './ryjfjs.component';
import { SharedModule } from '@shared';
import { RyjfjsRoutingModule } from './ryjfjs.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';



@NgModule({
  declarations: [
    RyjfjsComponent
  ],
  imports: [
    SharedModule,
    RyjfjsRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RyjfjsModule { }
