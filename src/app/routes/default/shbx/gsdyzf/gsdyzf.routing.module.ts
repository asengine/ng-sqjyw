import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsdyzfComponent } from './gsdyzf.component';


const routes: Routes = [
    { path: '', component: GsdyzfComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GsdyzfRoutingModule { }
