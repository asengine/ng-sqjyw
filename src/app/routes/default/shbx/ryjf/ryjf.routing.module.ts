import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RyjfComponent } from './ryjf.component';


const routes: Routes = [
    { path: '', component: RyjfComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RyjfRoutingModule { }
