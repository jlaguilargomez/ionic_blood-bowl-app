import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  selectedTeam: string;

  constructor(private _activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.selectedTeam = this._activatedRoute.snapshot.params.teamId;
  }
}
