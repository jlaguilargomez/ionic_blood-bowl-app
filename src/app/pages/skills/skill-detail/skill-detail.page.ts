import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from 'src/app/store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-skill-detail',
  templateUrl: './skill-detail.page.html',
  styleUrls: ['./skill-detail.page.scss']
})
export class SkillDetailPage implements OnInit {
  subscription$: Subscription;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dataService: Store
  ) {}

  ngOnInit() {
    this.subscription$ = this._activatedRoute.params.subscribe(data =>
      console.log(data.skillId)
    );
    this._dataService
      .getSkills()
      .pipe(map(el => el + '10'))
      .subscribe(data => console.log(data));
    // this._dataService.getSkill('pass').subscribe(data => console.log(data));
  }
}
