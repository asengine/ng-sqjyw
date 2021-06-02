import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RcfwComponent } from './rcfw.component';

const routes: Routes = [
    { path: '', component: RcfwComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RcfwRoutingModule { }
