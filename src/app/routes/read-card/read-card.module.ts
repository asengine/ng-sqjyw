import { NgModule } from '@angular/core';
import { ReadCardComponent } from './read-card.component';
import { ReadCardRoutingModule } from './read-card.routming.module';
import { SharedModule } from '@shared';


@NgModule({
  declarations: [
    ReadCardComponent
  ],
  imports: [
    SharedModule,
    ReadCardRoutingModule
  ]
})
export class ReadCardModule { }
