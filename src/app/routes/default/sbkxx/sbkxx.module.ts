import { NgModule } from '@angular/core';
import { SbkxxComponent } from './sbkxx.component';
import { SharedModule } from '@shared';
import { SbkxxRoutingModule } from './sbkxx.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';



@NgModule({
  declarations: [
    SbkxxComponent
  ],
  imports: [
    SharedModule,
    SbkxxRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class SbkxxModule { }
