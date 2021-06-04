import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadCardComponent } from './read-card.component';


const routes: Routes = [
    { path: '', component: ReadCardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReadCardRoutingModule { }
