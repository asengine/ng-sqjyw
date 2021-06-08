import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YljtzqkComponent } from './yljtzqk.component';


const routes: Routes = [
    { path: '', component: YljtzqkComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YljtzqkRoutingModule { }
