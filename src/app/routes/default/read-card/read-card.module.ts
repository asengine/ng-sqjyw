import { NgModule } from '@angular/core';
import { ReadCardComponent } from './read-card.component';
import { ReadCardRoutingModule } from './read-card.routming.module';
import { SharedModule } from '@shared';
import { ReadCardService } from '@core/services/readcard.service';


@NgModule({
  declarations: [
    ReadCardComponent
  ],
  imports: [
    SharedModule,
    ReadCardRoutingModule
  ],
  providers: [
    ReadCardService
  ]
})
export class ReadCardModule { }
