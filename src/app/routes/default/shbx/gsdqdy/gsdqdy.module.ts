import { NgModule } from '@angular/core';
import { GsdqdyComponent } from './gsdqdy.component';
import { SharedModule } from '@shared';
import { GsdqdyRoutingModule } from './gsdqdy.routing.module';
import { GsdqdyInfoComponent } from './gsdqdy-info/gsdqdy-info.component';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    GsdqdyComponent,
    GsdqdyInfoComponent
  ],
  entryComponents: [
    GsdqdyInfoComponent
  ],
  imports: [
    SharedModule,
    GsdqdyRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GsdqdyModule { }
