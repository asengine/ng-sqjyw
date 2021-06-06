import { NgModule } from '@angular/core';
import { YaopinComponent } from './yaopin.component';
import { SharedModule } from '@shared';
import { YaopinRoutingModule } from './yaopin.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';
import { YaopinInfoComponent } from './yaopin-info/yaopin-info.component';


@NgModule({
  declarations: [
    YaopinComponent,
    YaopinInfoComponent
  ],
  entryComponents: [
    YaopinComponent
  ],
  imports: [
    SharedModule,
    YaopinRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class YaopinModule { }
