import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SybxwgfhComponent } from './sybxwgfh.component';


const routes: Routes = [
    { path: '', component: SybxwgfhComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SybxwgfhRoutingModule { }
