import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DyffComponent } from './dyff.component';


const routes: Routes = [
    { path: '', component: DyffComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DyffRoutingModule { }
