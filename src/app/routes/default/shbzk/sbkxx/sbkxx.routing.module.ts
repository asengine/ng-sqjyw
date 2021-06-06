import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SbkxxComponent } from './sbkxx.component';


const routes: Routes = [
    { path: '', component: SbkxxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SbkxxRoutingModule { }
