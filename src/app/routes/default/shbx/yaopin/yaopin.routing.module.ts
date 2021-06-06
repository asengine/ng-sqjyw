import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YaopinComponent } from './yaopin.component';


const routes: Routes = [
    { path: '', component: YaopinComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class YaopinRoutingModule { }
