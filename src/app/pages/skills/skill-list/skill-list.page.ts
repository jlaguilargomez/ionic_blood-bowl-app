import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { SkillsService } from '../skills.service';
import { SkillData } from 'src/app/data.model';
import { Store } from 'src/app/store.service';
import { NavController } from '@ionic/angular';
import { SkillType } from '../skills';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.page.html',
  styleUrls: ['./skill-list.page.scss']
})
export class SkillListPage implements OnInit, OnDestroy {
  skillTypeSelected: SkillType;
  subscription$: Subscription;
  loadedSkills: Observable<SkillData[]>;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private skillsService: SkillsService,
    private store: Store,
    private _navController: NavController
  ) {}

  ngOnInit() {
    this.skillTypeSelected = this.skillsService.getSkillType(this.getUrlId());

    this.loadedSkills = this.skillsService.getListOfSkills(
      this.skillTypeSelected
    );
  }

  private getUrlId(): string {
    return this._activatedRoute.snapshot.params.skillTypeId;
  }

  ngOnDestroy() {}

  onSelectSkill(skill: string) {
    console.log(skill);
    this._router.navigate(['../../details/2'], {
      relativeTo: this._activatedRoute.root
    });
    // this._navController.navigateForward('/1');
  }
}
