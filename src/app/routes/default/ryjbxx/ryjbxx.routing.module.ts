import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RyjbxxComponent } from './ryjbxx.component';


const routes: Routes = [
    { path: '', component: RyjbxxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RyjbxxRoutingModule { }
