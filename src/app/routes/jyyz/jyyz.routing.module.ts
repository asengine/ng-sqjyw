import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JyyzComponent } from './jyyz.component';

const routes: Routes = [
    { path: '', component: JyyzComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JyyzRoutingModule { }
