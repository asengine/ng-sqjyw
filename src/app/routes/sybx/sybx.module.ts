import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SybxComponent } from './sybx.component';
import { SharedModule } from 'src/app/shared';
import { SybxRoutingModule } from './sybx.routing.module';
import { ListComponent } from './list/list.component';
import { InsuranceService } from 'src/app/core/services/insurance.service';



@NgModule({
  declarations: [
    SybxComponent,
    ListComponent
  ],
  entryComponents: [
    ListComponent
  ],
  imports: [
    SharedModule,
    SybxRoutingModule
  ],
  providers:[
    InsuranceService
  ]
})
export class SybxModule { }
