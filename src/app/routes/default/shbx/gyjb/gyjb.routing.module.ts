import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GyjbComponent } from './gyjb.component';


const routes: Routes = [
    { path: '', component: GyjbComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GyjbRoutingModule { }
