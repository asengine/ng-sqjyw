import { NgModule } from '@angular/core';
import { RyyzhComponent } from './ryyzh.component';
import { SharedModule } from '@shared';
import { RyyzhRoutingModule } from './ryyzh.routing.module';
import { ShebaokaService } from '@core/services/shebaoka.service';
import { ShehuibaoxianService } from '@core/services/shehuibaoxian.service';


@NgModule({
  declarations: [
    RyyzhComponent
  ],
  imports: [
    SharedModule,
    RyyzhRoutingModule
  ],
  providers: [
    ShebaokaService,
    ShehuibaoxianService
  ]
})
export class RyyzhModule { }
