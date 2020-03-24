import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamDetailPageRoutingModule } from './team-detail-routing.module';

import { TeamDetailPage } from './team-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamDetailPageRoutingModule,
    SharedModule
  ],
  declarations: [TeamDetailPage]
})
export class TeamDetailPageModule {}
