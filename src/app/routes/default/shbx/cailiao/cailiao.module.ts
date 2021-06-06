import { NgModule } from '@angular/core';
import { CailiaoComponent } from './cailiao.component';
import { CailiaoInfoComponent } from './cailiao-info/cailiao-info.component';
import { SharedModule } from '@shared';
import { CailiaoRoutingModule } from './cailiao.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';



@NgModule({
  declarations: [
    CailiaoComponent,
    CailiaoInfoComponent
  ],
  entryComponents: [
    CailiaoInfoComponent
  ],
  imports: [
    SharedModule,
    CailiaoRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class CailiaoModule { }
