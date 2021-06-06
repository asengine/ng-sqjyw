import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RynzhComponent } from './rynzh.component';


const routes: Routes = [
    { path: '', component: RynzhComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RynzhRoutingModule { }
