import { NgModule } from '@angular/core';
import { QyltxComponent } from './qyltx.component';
import { SharedModule } from '@shared';
import { QyltxRoutingModule } from './qyltx.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';

@NgModule({
  declarations: [
    QyltxComponent
  ],
  imports: [
    SharedModule,
    QyltxRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class QyltxModule { }
