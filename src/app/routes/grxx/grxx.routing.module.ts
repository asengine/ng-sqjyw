import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrxxComponent } from './grxx.component';

const routes: Routes = [
    { path: '', component: GrxxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrxxRoutingModule { }
