import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BtffComponent } from './btff.component';


const routes: Routes = [
    { path: '', component: BtffComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BtffRoutingModule { }
