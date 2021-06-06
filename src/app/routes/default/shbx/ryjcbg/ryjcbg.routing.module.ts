import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RyjcbgComponent } from './ryjcbg.component';


const routes: Routes = [
    { path: '', component: RyjcbgComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RyjcbgRoutingModule { }
