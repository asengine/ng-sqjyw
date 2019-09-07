import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: () => import('./routes/index/index.module').then(m => m.IndexModule) },
  { path: 'job', loadChildren: () => import('./routes/job/job.module').then(m => m.JobModule) },
  { path: 'recruit', loadChildren: () => import('./routes/recruit/recruit.module').then(m => m.RecruitModule) },
  { path: 'jyyz', loadChildren: () => import('./routes/jyyz/jyyz.module').then(m => m.JyyzModule) },
  { path: 'loan', loadChildren: () => import('./routes/loan/loan.module').then(m => m.LoanModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
