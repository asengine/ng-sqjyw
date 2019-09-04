import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing.module';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
