import { NgModule } from '@angular/core';
import { TxgzzmComponent } from './txgzzm.component';
import { SharedModule } from '@shared';
import { TxgzzmRoutingModule } from './txgzzm.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    TxgzzmComponent
  ],
  imports: [
    SharedModule,
    TxgzzmRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class TxgzzmModule { }
