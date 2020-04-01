import { Injectable } from '@angular/core';

import { SkillType } from './skills';
import { Store } from 'src/app/store.service';
import { SkillData } from 'src/app/data.model';
import { map, filter } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

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
  constructor(private store: Store) {}

  get skillTypes() {
    return [...this._skillTypes];
  }

  getSkillType(url: string) {
    if (url === 'all') {
      return null;
    } else {
      const skillObj = this._skillTypes.find(
        skillType => skillType.name_en === url
      );
      return skillObj;
    }
  }

  getListOfSkills(skillType: SkillType) {
    console.log(skillType);
    if (skillType === null) {
      const skills$ = this.store.skillData$;
      return skills$;
    } else {
      const skills$ = this.store.skillData$.pipe(
        map((data: SkillData[]) => data.filter(el => el.type === skillType.id))
      );
      return skills$;
    }
  }

  getSkillSelectedData(skillId: string): Observable<SkillData> {
    console.log(skillId);
    const skillSelected$ = this.store.skillData$.pipe(
      map((res: SkillData[]) =>
        res.find((skill: SkillData) => skill.name_en === skillId)
      )
    );

    return skillSelected$;
  }
}
