import { NgModule } from '@angular/core';
import { RycbbgComponent } from './rycbbg.component';
import { SharedModule } from '@shared';
import { RycbbgRoutingModule } from './rycbbg.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';


@NgModule({
  declarations: [
    RycbbgComponent
  ],
  imports: [
    SharedModule,
    RycbbgRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RycbbgModule { }
