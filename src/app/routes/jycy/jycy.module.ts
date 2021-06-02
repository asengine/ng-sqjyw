import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JycyComponent } from './jycy.component';
import { JycyRoutingModule } from './jycy.routing.module';
import { SharedModule } from '@shared';

@NgModule({
  declarations: [
    JycyComponent
  ],
  imports: [
    SharedModule,
    JycyRoutingModule
  ]
})
export class JycyModule { }
