import { NgModule } from '@angular/core';
import { RynzhComponent } from './rynzh.component';
import { SharedModule } from '@shared';
import { RynzhRoutingModule } from './rynzh.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';

@NgModule({
  declarations: [
    RynzhComponent
  ],
  imports: [
    SharedModule,
    RynzhRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RynzhModule { }
