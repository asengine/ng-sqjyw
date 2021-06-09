import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TxgzzmComponent } from './txgzzm.component';


const routes: Routes = [
    { path: '', component: TxgzzmComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TxgzzmRoutingModule { }
