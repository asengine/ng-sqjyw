import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GsdyslComponent } from './gsdysl.component';


const routes: Routes = [
    { path: '', component: GsdyslComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GsdyslRoutingModule { }
