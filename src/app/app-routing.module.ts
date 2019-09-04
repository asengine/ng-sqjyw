import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: () => import('./routes/index/index.module').then(m => m.IndexModule) },
  { path: 'readcard', loadChildren: () => import('./routes/readcard/readcard.module').then(m => m.ReadcardModule) },
  { path: 'job', loadChildren: () => import('./routes/job/job.module').then(m => m.JobModule) },
  { path: 'recruit', loadChildren: () => import('./routes/recruit/recruit.module').then(m => m.RecruitModule) },
  { path: 'subsidy', loadChildren: () => import('./routes/subsidy/subsidy.module').then(m => m.SubsidyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
