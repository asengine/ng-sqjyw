import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LhjyrysbbtComponent } from './lhjyrysbbt.component';


const routes: Routes = [
    { path: '', component: LhjyrysbbtComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LhjyrysbbtRoutingModule { }
