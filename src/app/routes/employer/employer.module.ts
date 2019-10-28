import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerComponent } from './employer.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/shared';
import { EmployerRoutingModule } from './employer.routing.module';
import { EmployerService } from 'src/app/core/services/employer.service';
import { AuthService } from 'src/app/core/services/auth.service';



@NgModule({
  declarations: [
    EmployerComponent,
    DetailsComponent
  ],
  imports: [
    SharedModule,
    EmployerRoutingModule
  ],
  entryComponents: [
    DetailsComponent
  ],
  providers: [
    EmployerService,
    AuthService
  ]
})
export class EmployerModule { }
