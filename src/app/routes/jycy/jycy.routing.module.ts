import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JycyComponent } from './jycy.component';

const routes: Routes = [
    { path: '', component: JycyComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JycyRoutingModule { }
