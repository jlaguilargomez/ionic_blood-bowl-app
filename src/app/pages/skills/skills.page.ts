import { Component, OnInit } from '@angular/core';
import { DataService, SkillType } from 'src/app/data.service';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})
export class SkillsPage implements OnInit {
  ribbonText = 'Habilidades';
  loadedSkillsType: SkillType[];

  constructor(
    private _dataService: DataService,
    private _skillsService: SkillsService
  ) {}

  ngOnInit() {
    this.loadedSkillsType = this._skillsService.skillTypes;
  }
}
