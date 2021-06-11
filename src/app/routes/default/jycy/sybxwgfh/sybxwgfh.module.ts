import { NgModule } from '@angular/core';
import { SybxwgfhComponent } from './sybxwgfh.component';
import { SharedModule } from '@shared';
import { SybxwgfhRoutingModule } from './sybxwgfh.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';

@NgModule({
  declarations: [
    SybxwgfhComponent
  ],
  imports: [
    SharedModule,
    SybxwgfhRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class SybxwgfhModule { }
