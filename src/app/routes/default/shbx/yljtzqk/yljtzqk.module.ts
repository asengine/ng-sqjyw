import { NgModule } from '@angular/core';
import { YljtzqkComponent } from './yljtzqk.component';
import { SharedModule } from '@shared';
import { YljtzqkRoutingModule } from './yljtzqk.routing.module';
import { YljtzqkInfoComponent } from './yljtzqk-info/yljtzqk-info.component';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    YljtzqkComponent,
    YljtzqkInfoComponent
  ],
  imports: [
    SharedModule,
    YljtzqkRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class YljtzqkModule { }
