import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SydjComponent } from './sydj.component';


const routes: Routes = [
    { path: '', component: SydjComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SydjRoutingModule { }
