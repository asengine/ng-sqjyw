import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RyjfjsComponent } from './ryjfjs.component';


const routes: Routes = [
    { path: '', component: RyjfjsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RyjfjsRoutingModule { }
