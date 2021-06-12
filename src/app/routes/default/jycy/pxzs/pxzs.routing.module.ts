import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PxzsComponent } from './pxzs.component';


const routes: Routes = [
    { path: '', component: PxzsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PxzsRoutingModule { }
