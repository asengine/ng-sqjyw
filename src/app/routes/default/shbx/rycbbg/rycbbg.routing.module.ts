import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RycbbgComponent } from './rycbbg.component';


const routes: Routes = [
    { path: '', component: RycbbgComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RycbbgRoutingModule { }
