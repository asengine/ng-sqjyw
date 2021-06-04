import { NgModule } from '@angular/core';
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
