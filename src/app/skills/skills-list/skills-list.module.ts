import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillsListPageRoutingModule } from './skills-list-routing.module';

import { SkillsListPage } from './skills-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillsListPageRoutingModule
  ],
  declarations: [SkillsListPage]
})
export class SkillsListPageModule {}
