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
      /** 社会保险 */
      {
        path: 'ryjbxx', // 人员基本信息查询
        loadChildren: () => import('./routes/default/shbx/ryjbxx/ryjbxx.module').then(m => m.RyjbxxModule)
      },
      {
        path: 'rycb', // 人员参保信息查询
        loadChildren: () => import('./routes/default/shbx/rycb/rycb.module').then(m => m.RycbModule)
      },
      {
        path: 'rycbbg', // 人员参保变更信息查询
        loadChildren: () => import('./routes/default/shbx/rycbbg/rycbbg.module').then(m => m.RycbbgModule)
      },
      {
        path: 'ryjfjs', // 人员缴费基数信息查询
        loadChildren: () => import('./routes/default/shbx/ryjfjs/ryjfjs.module').then(m => m.RyjfjsModule)
      },
      {
        path: 'ryjcbg', // 人员基础信息变更查询
        loadChildren: () => import('./routes/default/shbx/ryjcbg/ryjcbg.module').then(m => m.RyjcbgModule)
      },
      {
        path: 'ryjf', // 人员缴费查询
        loadChildren: () => import('./routes/default/shbx/ryjf/ryjf.module').then(m => m.RyjfModule)
      },
      {
        path: 'ryyzh', // 人员月账户信息查询
        loadChildren: () => import('./routes/default/shbx/ryyzh/ryyzh.module').then(m => m.RyyzhModule)
      },
      {
        path: 'rynzh', // 人员年账户信息查询
        loadChildren: () => import('./routes/default/shbx/rynzh/rynzh.module').then(m => m.RynzhModule)
      },
      {
        path: 'yaopin', // 药品信息查询
        loadChildren: () => import('./routes/default/shbx/yaopin/yaopin.module').then(m => m.YaopinModule)
      },
      {
        path: 'zhenliao', // 诊疗项目信息查询
        loadChildren: () => import('./routes/default/shbx/zhenliao/zhenliao.module').then(m => m.ZhenliaoModule)
      },
      {
        path: 'cailiao', // 材料信息查询
        loadChildren: () => import('./routes/default/shbx/cailiao/cailiao.module').then(m => m.CailiaoModule)
      },
      {
        path: 'gsjb', // 工伤基本信息查询
        loadChildren: () => import('./routes/default/shbx/gsjb/gsjb.module').then(m => m.GsjbModule)
      },
      {
        path: 'gsdyzf', // 工伤待遇支付明细查询
        loadChildren: () => import('./routes/default/shbx/gsdyzf/gsdyzf.module').then(m => m.GsdyzfModule)
      },
      {
        path: 'gsdqdy', // 工伤定期待遇信息查询
        loadChildren: () => import('./routes/default/shbx/gsdqdy/gsdqdy.module').then(m => m.GsdqdyModule)
      },
      {
        path: 'gsgyqs', // 工伤供养亲属待遇信息查询
        loadChildren: () => import('./routes/default/shbx/gsgyqs/gsgyqs.module').then(m => m.GsgyqsModule)
      },
      {
        path: 'gsdysl', // 工伤待遇受理信息查询
        loadChildren: () => import('./routes/default/shbx/gsdysl/gsdysl.module').then(m => m.GsdyslModule)
      },
      {
        path: 'qyltx', // 企业离退休人员
        loadChildren: () => import('./routes/default/shbx/qyltx/qyltx.module').then(m => m.QyltxModule)
      },
      {
        path: 'yljtzqk', // 养老金调整情况查询
        loadChildren: () => import('./routes/default/shbx/yljtzqk/yljtzqk.module').then(m => m.YljtzqkModule)
      },
      {
        path: 'gyjb', // 供养基本情况查询
        loadChildren: () => import('./routes/default/shbx/gyjb/gyjb.module').then(m => m.GyjbModule)
      },
      {
        path: 'bkf', // 补扣发查询
        loadChildren: () => import('./routes/default/shbx/bkf/bkf.module').then(m => m.BkfModule)
      },
      {
        path: 'grffbg', // 3.13	个人发放信息变更查询
        loadChildren: () => import('./routes/default/shbx/grffbg/grffbg.module').then(m => m.GrffbgModule)
      },
      {
        path: 'dyff', // 3.14	待遇发放信息查询
        loadChildren: () => import('./routes/default/shbx/dyff/dyff.module').then(m => m.DyffModule)
      },
      {
        path: 'txgzzm', // 3.16	退休工资证明查询
        loadChildren: () => import('./routes/default/shbx/txgzzm/txgzzm.module').then(m => m.TxgzzmModule)
      },
      /** 社会保险 */


      /** 就业创业 */
      {
        path: 'sydj', // 3.1	失业登记查询
        loadChildren: () => import('./routes/default/jycy/sydj/sydj.module').then(m => m.SydjModule)
      },
      {
        path: 'jyknry', // 3.2	就业困难人员查询
        loadChildren: () => import('./routes/default/jycy/jyknry/jyknry.module').then(m => m.JyknryModule)
      },
      {
        path: 'jycyz', // 3.3  就业创业正查询
        loadChildren: () => import('./routes/default/jycy/jycyz/jycyz.module').then(m => m.JycyzModule)
      },
      {
        path: 'dwjydj', // 3.4	单位就业登记查询
        loadChildren: () => import('./routes/default/jycy/dwjydj/dwjydj.module').then(m => m.DwjydjModule)
      },
      {
        path: 'lhjydj', // 灵活就业登记查询
        loadChildren: () => import('./routes/default/jycy/lhjydj/lhjydj.module').then(m => m.LhjydjModule)
      },
      {
        path: 'sybxwgfh', // 失业保险稳岗返还查询
        loadChildren: () => import('./routes/default/jycy/sybxwgfh/sybxwgfh.module').then(m => m.SybxwgfhModule)
      },
      {
        path: 'xwqydbdk', // 小微企业担保贷款查询
        loadChildren: () => import('./routes/default/jycy/xwqydbdk/xwqydbdk.module').then(m => m.XwqydbdkModule)
      },
      {
        path: 'cyfhjd', // 创业孵化基地查询
        loadChildren: () => import('./routes/default/jycy/cyfhjd/cyfhjd.module').then(m => m.CyfhjdModule)
      },
      {
        path: 'jyyz', // 3.9	就业援助查询
        loadChildren: () => import('./routes/default/jycy/jyyz/jyyz.module').then(m => m.JyyzModule)
      },
      {
        path: 'lhjyrysbbt', // 3.10	灵活就业人员社保补贴查询
        loadChildren: () => import('./routes/default/jycy/lhjyrysbbt/lhjyrysbbt.module').then(m => m.LhjyrysbbtModule)
      },
      {
        path: 'dwxnjyknrysbbt', // 3.11	单位吸纳就业困难人员社保补贴查询
        loadChildren: () => import('./routes/default/jycy/dwxnjyknrysbbt/dwxnjyknrysbbt.module').then(m => m.DwxnjyknrysbbtModule)
      },
      {
        path: 'xwqyxngxbyssbbt', // 3.12	小微企业吸纳高校毕业生社保补贴查询
        loadChildren: () => import('./routes/default/jycy/xwqyxngxbyssbbt/xwqyxngxbyssbbt.module').then(m => m.XwqyxngxbyssbbtModule)
      },
      {
        path: 'btff', //	3.13	补贴发放查询
        loadChildren: () => import('./routes/default/jycy/btff/btff.module').then(m => m.BtffModule)
      },
      {
        path: 'jyygtgls', //	就业用工/退工历史信息查询
        loadChildren: () => import('./routes/default/jycy/jyygtgls/jyygtgls.module').then(m => m.JyygtglsModule)
      },
      {
        path: 'pxkh', //	3.14	培训考核查询
        loadChildren: () => import('./routes/default/jycy/pxkh/pxkh.module').then(m => m.PxkhModule)
      },
      {
        path: 'pxxy', //	3.15	培训学员综合查询
        loadChildren: () => import('./routes/default/jycy/pxxy/pxxy.module').then(m => m.PxxyModule)
      },
      {
        path: 'pxdw', // 3.16	培训单位信息查询
        loadChildren: () => import('./routes/default/jycy/pxdw/pxdw.module').then(m => m.PxdwModule)
      },
      {
        path: 'pxbm', // 3.17	培训报名查询
        loadChildren: () => import('./routes/default/jycy/pxbm/pxbm.module').then(m => m.PxbmModule)
      },
      {
        path: 'pxzs', // 3.18	培训证书查询
        loadChildren: () => import('./routes/default/jycy/pxzs/pxzs.module').then(m => m.PxzsModule)
      },
      /** 就业创业 */

      /**社会保障卡 */
      {
        path: 'sbkxx', // 社保卡信息查询
        loadChildren: () => import('./routes/default/shbzk/sbkxx/sbkxx.module').then(m => m.SbkxxModule)
      },

      /**社会保障卡 */
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
    ]
  },
  // 旧的路由
  { path: 'sybx', loadChildren: () => import('./routes/sybx/sybx.module').then(m => m.SybxModule) },
  { path: 'job', loadChildren: () => import('./routes/job/job.module').then(m => m.JobModule) },
  { path: 'recruit', loadChildren: () => import('./routes/recruit/recruit.module').then(m => m.RecruitModule) },
  //{ path: 'jyyz', loadChildren: () => import('./routes/jyyz/jyyz.module').then(m => m.JyyzModule) },
  { path: 'cyfw', loadChildren: () => import('./routes/cyfw/cyfw.module').then(m => m.CyfwModule) },
  { path: 'grxx', loadChildren: () => import('./routes/grxx/grxx.module').then(m => m.GrxxModule) },
  { path: 'employer', loadChildren: () => import('./routes/employer/employer.module').then(m => m.EmployerModule) },
  { path: 'training', loadChildren: () => import('./routes/training/training.module').then(m => m.TrainingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
