import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CyfwComponent } from './cyfw.component';

const routes: Routes = [
    { path: '', component: CyfwComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CyfwRoutingModule { }
