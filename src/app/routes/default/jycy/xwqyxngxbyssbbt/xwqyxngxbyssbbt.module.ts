import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XwqyxngxbyssbbtComponent } from './xwqyxngxbyssbbt.component';
import { SharedModule } from '@shared';
import { XwqyxngxbyssbbtRoutingModule } from './xwqyxngxbyssbbt.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { JiuguanzhongxinService } from '@core/services/jiuguanzhongxin.service';



@NgModule({
  declarations: [
    XwqyxngxbyssbbtComponent
  ],
  imports: [
    SharedModule,
    XwqyxngxbyssbbtRoutingModule
  ],
  providers: [
    ShebaokaService,
    JiuguanzhongxinService
  ]
})
export class XwqyxngxbyssbbtModule { }
