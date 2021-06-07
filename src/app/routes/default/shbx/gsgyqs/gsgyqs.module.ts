import { NgModule } from '@angular/core';
import { GsgyqsComponent } from './gsgyqs.component';
import { SharedModule } from '@shared';
import { GsgyqsRoutingModule } from './gsgyqs.routing.module';
import { GsgyqsInfoComponent } from './gsgyqs-info/gsgyqs-info.component';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    GsgyqsComponent,
    GsgyqsInfoComponent
  ],
  imports: [
    SharedModule,
    GsgyqsRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GsgyqsModule { }
