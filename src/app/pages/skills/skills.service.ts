import { Injectable } from '@angular/core';

import { SkillType } from './skills';
import { DataService } from 'src/app/data.service';
import { SkillData } from 'src/app/data.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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

  public getSkillId(skillUrl: string) {
    if (skillUrl === 'all') {
      return 'todas';
    } else {
      const skillSel = this.skillTypes.find(elem => {
        // tslint:disable-next-line: no-unused-expression
        return elem.link === skillUrl;
      });
      return skillSel.id;
    }
  }

  private getSkillType(skillUrl: string) {
    if (skillUrl === 'all') {
      return 'ALL';
    } else {
      const skillSel = this.skillTypes.find(elem => {
        // tslint:disable-next-line: no-unused-expression
        return elem.link === skillUrl;
      });
      return skillSel.type;
    }
  }

  public getSkillList(skillUrl: string): Observable<SkillData[]> {
    const skillType = this.getSkillType(skillUrl);
    console.log(skillType);

    return this._dataService.getSkills().pipe(
      // del array de habilidades, filtro los que necesite en función del tipo seleccionado
      map(skillList => {
        if (skillType === 'ALL') {
          return skillList;
        } else {
          return skillList.filter(skills => {
            return skills.type === skillType;
          });
        }
      })
    );
  }
}
