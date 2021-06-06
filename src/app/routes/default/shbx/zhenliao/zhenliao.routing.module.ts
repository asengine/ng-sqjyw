import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZhenliaoComponent } from './zhenliao.component';


const routes: Routes = [
    { path: '', component: ZhenliaoComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ZhenliaoRoutingModule { }
