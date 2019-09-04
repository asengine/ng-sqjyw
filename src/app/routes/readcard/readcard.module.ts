import { NgModule } from '@angular/core';
import { ReadcardComponent } from './readcard.component';
import { SharedModule } from 'src/app/shared';
import { ReadcardRoutingModule } from './readcard.routing.module';

@NgModule({
  declarations: [ReadcardComponent],
  imports: [
    SharedModule,
    ReadcardRoutingModule
  ]
})
export class ReadcardModule { }
