import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyfhjdComponent } from './cyfhjd.component';


const routes: Routes = [
    { path: '', component: CyfhjdComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CyfhjdRoutingModule { }
