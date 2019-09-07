import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanComponent } from './loan.component';
import { SharedModule } from 'src/app/shared';
import { LoanRoutingModule } from './loan.routing.module';



@NgModule({
  declarations: [LoanComponent],
  imports: [
    SharedModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
