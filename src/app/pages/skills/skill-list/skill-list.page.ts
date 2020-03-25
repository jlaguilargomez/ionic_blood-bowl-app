import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkillsService } from '../skills.service';
import { SkillData } from 'src/app/data.model';
import { DataService } from 'src/app/data.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.page.html',
  styleUrls: ['./skill-list.page.scss']
})
export class SkillListPage implements OnInit, OnDestroy {
  skillTypeSelected: string;
  subscription$: Subscription;
  loadedSkills: SkillData[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _skillsService: SkillsService,
    private _dataService: DataService,
    private _navController: NavController
  ) {}

  ngOnInit() {
    this.subscription$ = this._activatedRoute.params.subscribe(data => {
      this.skillTypeSelected =
        'Habilidades: ' + this._skillsService.getSkillId(data.skillTypeId);
      this._skillsService
        .getSkillList(data.skillTypeId)
        .subscribe(skillSelected => {
          console.log(skillSelected);
          this.loadedSkills = skillSelected;
        });
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }

  onSelectSkill(skill: string) {
    // console.log(skill);
    this._navController.navigateForward('/1');
  }
}
