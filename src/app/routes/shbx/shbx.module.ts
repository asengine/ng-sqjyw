import { NgModule } from '@angular/core';
import { ShbxComponent } from './shbx.component';
import { SharedModule } from '@shared';
import { ShbxRoutingModule } from './shbx.routing.module';


@NgModule({
  declarations: [
    ShbxComponent
  ],
  imports: [
    SharedModule,
    ShbxRoutingModule
  ]
})
export class ShbxModule { }
