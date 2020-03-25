import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkillsService } from '../skills.service';
import { SkillData } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.page.html',
  styleUrls: ['./skill-list.page.scss']
})
export class SkillListPage implements OnInit, OnDestroy {
  skillSelected: string;
  subscription$: Subscription;
  loadedSkills: SkillData[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _skillsService: SkillsService,
    private _dataService: DataService
  ) {}

  ngOnInit() {
    this.subscription$ = this._activatedRoute.params.subscribe(data => {
      this.skillSelected =
        'Habilidad: ' + this._skillsService.getSkillId(data.skillId);
      this._skillsService
        .getSkillList(data.skillId)
        .subscribe(skillSelected => {
          console.log(skillSelected);
          this.loadedSkills = skillSelected;
        });
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
