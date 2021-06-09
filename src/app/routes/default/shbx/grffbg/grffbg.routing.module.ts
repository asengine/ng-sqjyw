import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GrffbgComponent } from './grffbg.component';


const routes: Routes = [
    { path: '', component: GrffbgComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GrffbgRoutingModule { }
