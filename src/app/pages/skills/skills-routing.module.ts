import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsPage } from './skills.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsPage
  },
  {
    path: 'list/:skillTypeId',
    loadChildren: () =>
      import('./skill-list/skill-list.module').then(m => m.SkillListPageModule)
  },
  {
    path: 'detail/:skillId',
    loadChildren: () =>
      import('./skill-detail/skill-detail.module').then(
        m => m.SkillDetailPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsPageRoutingModule {}
