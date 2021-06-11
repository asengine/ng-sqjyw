import { NgModule } from '@angular/core';
import { XwqydbdkComponent } from './xwqydbdk.component';
import { SharedModule } from '@shared';
import { XwqydbdkRoutingModule } from './xwqydbdk.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';



@NgModule({
  declarations: [
    XwqydbdkComponent
  ],
  imports: [
    SharedModule,
    XwqydbdkRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class XwqydbdkModule { }
