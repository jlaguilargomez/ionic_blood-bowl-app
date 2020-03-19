import { Injectable } from '@angular/core';

export interface MainBtnInterface {
  img: string;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class MainMenuService {
  private btnContent: MainBtnInterface[] = [
    {
      img: 'assets/img/main-menu/teams_img.png',
      text: 'equipos'
    },
    {
      img: 'assets/img/main-menu/skills_img.png',
      text: 'habilidades'
    },
    {
      img: 'assets/img/main-menu/photos_img.png',
      text: 'fotos'
    }
  ];

  constructor() {}

  getBtnContent() {
    return this.btnContent;
  }
}
