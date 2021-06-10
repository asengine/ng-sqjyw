import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LhjydjComponent } from './lhjydj.component';


const routes: Routes = [
    { path: '', component: LhjydjComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LhjydjRoutingModule { }
