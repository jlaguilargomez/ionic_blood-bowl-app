import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TeamsService } from '../teams.service';
import { TeamData } from 'src/app/data.model';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.page.html',
  styleUrls: ['./team-detail.page.scss'],
})
export class TeamDetailPage implements OnInit {
  selectedTeam: string;
  selectedTeamData: TeamData;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _teamsService: TeamsService
  ) {}

  ngOnInit() {
    this.selectedTeam = this._activatedRoute.snapshot.params.teamId;

    this._teamsService.getTeamInfo(this.selectedTeam).subscribe((res) => {
      this.selectedTeamData = res;
      console.log(this.selectedTeamData);
    });
  }
}
