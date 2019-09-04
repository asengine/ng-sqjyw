import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubsidyComponent } from './subsidy.component';


const routes: Routes = [
    { path: '', component: SubsidyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubsidyRoutingModule { }
