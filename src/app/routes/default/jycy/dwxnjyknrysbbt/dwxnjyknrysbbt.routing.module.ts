import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DwxnjyknrysbbtComponent } from './dwxnjyknrysbbt.component';


const routes: Routes = [
    { path: '', component: DwxnjyknrysbbtComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DwxnjyknrysbbtRoutingModule { }
