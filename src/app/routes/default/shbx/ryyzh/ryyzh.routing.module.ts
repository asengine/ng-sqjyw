import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RyyzhComponent } from './ryyzh.component';


const routes: Routes = [
    { path: '', component: RyyzhComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RyyzhRoutingModule { }
