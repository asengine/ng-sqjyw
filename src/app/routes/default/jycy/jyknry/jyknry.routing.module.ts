import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JyknryComponent } from './jyknry.component';


const routes: Routes = [
    { path: '', component: JyknryComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JyknryRoutingModule { }
