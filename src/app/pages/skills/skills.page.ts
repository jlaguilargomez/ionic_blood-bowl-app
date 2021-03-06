import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store.service';
import { SkillsService } from './skills.service';
import { SkillType } from './skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})
export class SkillsPage implements OnInit {
  ribbonText = 'Habilidades';
  loadedSkillsType: SkillType[];

  constructor(private _skillsService: SkillsService, private store: Store) {}

  ngOnInit() {
    this.loadedSkillsType = this._skillsService.skillTypes;
  }
}
