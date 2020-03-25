import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SkillsPage } from './skills.page';

const routes: Routes = [
  {
    path: '',
    component: SkillsPage
  },
  {
    path: ':skillId',
    loadChildren: () =>
      import('./skill-list/skill-list.module').then(m => m.SkillListPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsPageRoutingModule {}
