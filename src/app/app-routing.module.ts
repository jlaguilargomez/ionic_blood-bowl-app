import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () =>
      import('./pages/main-menu/main-menu.module').then(
        m => m.MainMenuPageModule
      )
  },
  {
    path: 'skills',
    loadChildren: () =>
      import('./pages/skills/skills.module').then(m => m.SkillsPageModule)
  },
  {
    path: 'photos',
    loadChildren: () =>
      import('./pages/photos/photos.module').then(m => m.PhotosPageModule)
  },
  {
    path: 'teams',
    loadChildren: () =>
      import('./pages/teams/teams.module').then(m => m.TeamsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
