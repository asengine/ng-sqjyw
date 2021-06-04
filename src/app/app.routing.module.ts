import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './routes/layout/layout.component';
import { DefaultComponent } from './routes/default/default.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', loadChildren: () => import('./routes/index/index.module').then(m => m.IndexModule) },
  {
    path: 'default', //默认布局路由
    component: DefaultComponent,
    children: [
      { path: '', redirectTo: 'read-card', pathMatch: 'full' },
      {
        path: 'read-card',// 读卡方式
        loadChildren: () => import('./routes/default/read-card/read-card.module').then(m => m.ReadCardModule)
      },
      {
        path: 'ryjbxx', // 人员基本信息查询
        loadChildren: () => import('./routes/default/ryjbxx/ryjbxx.module').then(m => m.RyjbxxModule)
      },

    ]
  },
  {
    path: 'layout', // 分类查询路由
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'shbx', pathMatch: 'full' },
      { path: 'shbx', loadChildren: () => import('./routes/layout/shbx/shbx.module').then(m => m.ShbxModule) }, // 社会保险
      { path: 'jycy', loadChildren: () => import('./routes/layout/jycy/jycy.module').then(m => m.JycyModule) }, // 就业创业
      { path: 'rcfw', loadChildren: () => import('./routes/layout/rcfw/rcfw.module').then(m => m.RcfwModule) }, // 人才服务
      { path: 'shbzk', loadChildren: () => import('./routes/layout/shbzk/shbzk.module').then(m => m.ShbzkModule) }, // 社会保障卡

      // 旧的路由
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
