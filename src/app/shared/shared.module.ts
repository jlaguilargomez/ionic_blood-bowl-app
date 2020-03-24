import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';

@NgModule({
  declarations: [HeaderComponent, BackBtnComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, BackBtnComponent]
})
export class SharedModule {}
