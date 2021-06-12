import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PxxyComponent } from './pxxy.component';


const routes: Routes = [
    { path: '', component: PxxyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PxxyRoutingModule { }
