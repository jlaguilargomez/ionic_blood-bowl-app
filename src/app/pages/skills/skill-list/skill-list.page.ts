import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { SkillsService } from '../skills.service';
import { SkillData } from 'src/app/data.model';
import { Store, SkillType } from 'src/app/store.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.page.html',
  styleUrls: ['./skill-list.page.scss']
})
export class SkillListPage implements OnInit, OnDestroy {
  skillTypeSelected: SkillType;
  subscription$: Subscription;
  loadedSkills: SkillData[];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private skillsService: SkillsService,
    private store: Store,
    private _navController: NavController
  ) {}

  ngOnInit() {
    const url = this._activatedRoute.snapshot.params.skillTypeId;
    const skillObj = this.skillsService.skillTypes.find(
      skillType => skillType.link === url
    );
    this.skillTypeSelected = skillObj;
  }

  ngOnDestroy() {}

  onSelectSkill(skill: string) {
    // console.log(skill);
    this._navController.navigateForward('/1');
  }
}
