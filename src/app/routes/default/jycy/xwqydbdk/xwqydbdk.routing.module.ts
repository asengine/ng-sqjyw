import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XwqydbdkComponent } from './xwqydbdk.component';


const routes: Routes = [
    { path: '', component: XwqydbdkComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XwqydbdkRoutingModule { }
