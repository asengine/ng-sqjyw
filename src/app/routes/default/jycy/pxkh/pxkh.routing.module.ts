import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PxkhComponent } from './pxkh.component';


const routes: Routes = [
    { path: '', component: PxkhComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PxkhRoutingModule { }
