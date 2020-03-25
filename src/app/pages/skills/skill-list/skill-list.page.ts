import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SkillsService } from '../skills.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.page.html',
  styleUrls: ['./skill-list.page.scss']
})
export class SkillListPage implements OnInit, OnDestroy {
  skillSelected: string;
  subscription$: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _skillsService: SkillsService
  ) {}

  ngOnInit() {
    this.subscription$ = this._activatedRoute.params.subscribe(data => {
      console.log(data.skillId);
      this.skillSelected =
        'Habilidad: ' + this._skillsService.getSkillId(data.skillId);
    });
  }

  ngOnDestroy() {
    this.subscription$.unsubscribe();
  }
}
