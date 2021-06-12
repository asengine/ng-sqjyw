import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PxdwComponent } from './pxdw.component';


const routes: Routes = [
    { path: '', component: PxdwComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PxdwRoutingModule { }
