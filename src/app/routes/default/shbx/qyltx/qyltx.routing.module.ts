import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QyltxComponent } from './qyltx.component';


const routes: Routes = [
    { path: '', component: QyltxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class QyltxRoutingModule { }
