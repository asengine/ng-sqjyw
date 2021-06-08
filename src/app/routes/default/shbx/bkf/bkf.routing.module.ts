import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BkfComponent } from './bkf.component';


const routes: Routes = [
    { path: '', component: BkfComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BkfRoutingModule { }
