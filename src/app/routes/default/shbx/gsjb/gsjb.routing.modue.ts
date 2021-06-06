import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsjbComponent } from './gsjb.component';


const routes: Routes = [
    { path: '', component: GsjbComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GsjbRoutingModule { }
