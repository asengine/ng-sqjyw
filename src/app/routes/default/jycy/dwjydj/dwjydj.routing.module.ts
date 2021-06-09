import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwjydjComponent } from './dwjydj.component';


const routes: Routes = [
    { path: '', component: DwjydjComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DwjydjRoutingModule { }
