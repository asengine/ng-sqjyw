import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: () => import('./routes/index/index.module').then(m => m.IndexModule) },
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'shbx', pathMatch: 'full' },
      { path: 'shbx', loadChildren: () => import('./routes/shbx/shbx.module').then(m => m.ShbxModule) }, // 社会保险
      { path: 'jycy', loadChildren: () => import('./routes/jycy/jycy.module').then(m => m.JycyModule) }, // 就业创业
      { path: 'rcfw', loadChildren: () => import('./routes/rcfw/rcfw.module').then(m => m.RcfwModule) }, // 人才服务
      { path: 'shbzk', loadChildren: () => import('./routes/shbzk/shbzk.module').then(m => m.ShbzkModule) }, // 社会保障卡
      { path: 'sybx', loadChildren: () => import('./routes/sybx/sybx.module').then(m => m.SybxModule) },
      { path: 'job', loadChildren: () => import('./routes/job/job.module').then(m => m.JobModule) },
      { path: 'recruit', loadChildren: () => import('./routes/recruit/recruit.module').then(m => m.RecruitModule) },
      { path: 'jyyz', loadChildren: () => import('./routes/jyyz/jyyz.module').then(m => m.JyyzModule) },
      { path: 'cyfw', loadChildren: () => import('./routes/cyfw/cyfw.module').then(m => m.CyfwModule) },
      { path: 'grxx', loadChildren: () => import('./routes/grxx/grxx.module').then(m => m.GrxxModule) },
      { path: 'employer', loadChildren: () => import('./routes/employer/employer.module').then(m => m.EmployerModule) },
      { path: 'training', loadChildren: () => import('./routes/training/training.module').then(m => m.TrainingModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
