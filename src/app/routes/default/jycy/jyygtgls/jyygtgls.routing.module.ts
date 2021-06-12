import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JyygtglsComponent } from './jyygtgls.component';

const routes: Routes = [
    { path: '', component: JyygtglsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JyygtglsRoutingModule { }
