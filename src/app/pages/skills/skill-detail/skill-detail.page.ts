import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Store } from 'src/app/store.service';
import { map } from 'rxjs/operators';
import { SkillsService } from '../skills.service';
import { SkillData } from 'src/app/data.model';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.page.html',
  styleUrls: ['./skill-detail.page.scss']
})
export class SkillDetailPage implements OnInit {
  selectedSkill: string;
  skillName: string;
  skillDescription: string;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _skillService: SkillsService
  ) {}

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    this.selectedSkill = this._activatedRoute.snapshot.params['skillId'];

    this.getSkillEsName();

    this.getSkillDescription();
  }

  private getSkillEsName() {
    this._skillService
      .getSkillSelectedData(this.selectedSkill)
      .subscribe(res => {
        this.skillName = res.name_es;
      });
  }

  private getSkillDescription() {
    this._skillService
      .getSkillSelectedData(this.selectedSkill)
      .subscribe(res => {
        this.skillDescription = res.description;
      });
  }
}
