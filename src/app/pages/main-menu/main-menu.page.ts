import { Component, OnInit } from '@angular/core';
import { MainMenuService, MainBtnInterface } from './main-menu.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.page.html',
  styleUrls: ['./main-menu.page.scss']
})
export class MainMenuPage implements OnInit {
  constructor(
    private mainMenuService: MainMenuService,
    private navController: NavController
  ) {}

  btnElements: MainBtnInterface[];

  ngOnInit() {
    this.btnElements = this.mainMenuService.getBtnContent();
  }

  onGoBack() {
    this.navController.back();
  }
}
