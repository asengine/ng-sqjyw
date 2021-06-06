import { NgModule } from '@angular/core';
import { GsdyzfComponent } from './gsdyzf.component';
import { GsdyzfInfoComponent } from './gsdyzf-info/gsdyzf-info.component';
import { SharedModule } from '@shared';
import { GsdyzfRoutingModule } from './gsdyzf.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuidaiyuService } from '@core/services/shehuidaiyu.service';


@NgModule({
  declarations: [
    GsdyzfComponent,
    GsdyzfInfoComponent
  ],
  entryComponents: [
    GsdyzfInfoComponent
  ],
  imports: [
    SharedModule,
    GsdyzfRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuidaiyuService
  ]
})
export class GsdyzfModule { }
