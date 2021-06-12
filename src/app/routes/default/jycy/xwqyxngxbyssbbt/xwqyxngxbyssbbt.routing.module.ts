import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { XwqyxngxbyssbbtComponent } from './xwqyxngxbyssbbt.component';


const routes: Routes = [
    { path: '', component: XwqyxngxbyssbbtComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class XwqyxngxbyssbbtRoutingModule { }
