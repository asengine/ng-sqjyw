import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SybxComponent } from './sybx.component';


const routes: Routes = [
    { path: '', component: SybxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SybxRoutingModule { }
