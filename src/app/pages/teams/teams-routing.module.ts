import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamsPage } from './teams.page';

const routes: Routes = [
  {
    path: '',
    component: TeamsPage
  },
  {
    path: ':teamId',
    loadChildren: () =>
      import('./team-detail/team-detail.module').then(
        m => m.TeamDetailPageModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsPageRoutingModule {}
