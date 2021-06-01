import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShbxComponent } from './shbx.component';


const routes: Routes = [
    { path: '', component: ShbxComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShbxRoutingModule { }
