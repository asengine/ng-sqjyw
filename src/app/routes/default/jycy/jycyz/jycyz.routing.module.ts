import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JycyzComponent } from './jycyz.component';


const routes: Routes = [
    { path: '', component: JycyzComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JycyzRoutingModule { }
