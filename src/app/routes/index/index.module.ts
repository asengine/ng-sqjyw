import { NgModule } from '@angular/core';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing.module';
import { SharedModule } from 'src/app/shared';
import { AuthService } from 'src/app/core/services/auth.service';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    IndexRoutingModule
  ],
  providers: [
    AuthService
  ]
})
export class IndexModule { }
