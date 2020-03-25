import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SkillListPageRoutingModule } from './skill-list-routing.module';

import { SkillListPage } from './skill-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SkillListPageRoutingModule,
    SharedModule
  ],
  declarations: [SkillListPage]
})
export class SkillListPageModule {}
