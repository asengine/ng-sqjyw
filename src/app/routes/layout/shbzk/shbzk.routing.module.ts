import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShbzkComponent } from './shbzk.component';

const routes: Routes = [
    { path: '', component: ShbzkComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShbzkRoutingModule { }
