import { Injectable } from '@angular/core';

import { SkillType } from './skills';
import { DataService } from 'src/app/data.service';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  private _skillTypes: SkillType[] = [
    new SkillType('G', 'general', 'general'),
    new SkillType('F', 'fuerza', 'strength'),
    new SkillType('A', 'agilidad', 'agility'),
    new SkillType('P', 'pase', 'pass'),
    new SkillType('E', 'extraordinaria', 'extraordinary'),
    new SkillType('M', 'mutacion', 'mutation')
  ];
  constructor(private _dataService: DataService) {}

  get skillTypes() {
    return [...this._skillTypes];
  }

  getSkillId(skillUrl: string) {
    if (skillUrl === 'all') {
      return 'todas';
    } else {
      const skillSel = this.skillTypes.find(elem => {
        console.log(elem.link);
        // tslint:disable-next-line: no-unused-expression
        return elem.link === skillUrl;
      });
      return skillSel.id;
    }
  }

  getSkillList(skillUrl: string) {}
}
