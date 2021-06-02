import { NgModule } from '@angular/core';
import { ShbzkComponent } from './shbzk.component';
import { SharedModule } from '@shared';
import { ShbzkRoutingModule } from './shbzk.routing.module';


@NgModule({
  declarations: [
    ShbzkComponent
  ],
  imports: [
    SharedModule,
    ShbzkRoutingModule
  ]
})
export class ShbzkModule { }
