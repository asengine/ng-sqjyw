import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RycbComponent } from './rycb.component';


const routes: Routes = [
    { path: '', component: RycbComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RycbRoutingModule { }
