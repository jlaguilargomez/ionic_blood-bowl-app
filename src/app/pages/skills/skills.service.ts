import { Injectable } from '@angular/core';

import { SkillType } from './skills';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skillTypes: SkillType[] = [
    new SkillType('G', 'general'),
    new SkillType('F', 'fuerza'),
    new SkillType('A', 'agilidad'),
    new SkillType('P', 'pase'),
    new SkillType('E', 'extraordinaria'),
    new SkillType('M', 'mutación')
  ];
  constructor() {}

  get skillTypes() {
    return [...this._skillTypes];
  }
}
