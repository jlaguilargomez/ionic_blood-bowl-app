import { Injectable } from '@angular/core';

export interface MainBtnInterface {
  img: string;
  text: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class MainMenuService {
  private btnContent: MainBtnInterface[] = [
    {
      img: 'assets/img/main-menu/teams_img.png',
      text: 'equipos',
      link: '/teams',
    },
    {
      img: 'assets/img/main-menu/skills_img.png',
      text: 'habilidades',
      link: '/skills',
    },
    {
      img: 'assets/img/main-menu/photos_img.png',
      text: 'fotos',
      link: '/photos',
    },
    {
      img: 'assets/img/main-menu/touchdown.jpg',
      text: 'tablas',
      link: '/boards',
    },
    {
      img: 'assets/img/main-menu/resources_img.jpg',
      text: 'recursos',
      link: '/resources',
    },
  ];

  constructor() {}

  getBtnContent() {
    return this.btnContent;
  }
}
