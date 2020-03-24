import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './components/header/header.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { RibbonTitleComponent } from './components/ribbon-title/ribbon-title.component';

@NgModule({
  declarations: [HeaderComponent, BackBtnComponent, RibbonTitleComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, BackBtnComponent, RibbonTitleComponent]
})
export class SharedModule {}
