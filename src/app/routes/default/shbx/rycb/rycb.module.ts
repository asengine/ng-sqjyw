import { NgModule } from '@angular/core';
import { RycbComponent } from './rycb.component';
import { SharedModule } from '@shared';
import { RycbRoutingModule } from './rycb.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';


@NgModule({
  declarations: [
    RycbComponent
  ],
  imports: [
    SharedModule,
    RycbRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RycbModule { }
