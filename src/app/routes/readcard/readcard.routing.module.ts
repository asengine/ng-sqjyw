import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadcardComponent } from './readcard.component';


const routes: Routes = [
    { path: '', component: ReadcardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReadcardRoutingModule { }
