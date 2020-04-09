import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/store.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {
  teamData: Array<{ name: string; img: string }>;
  ribbonText = 'Equipos';
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.teamData$
      .pipe(
        map((res) =>
          res.map((team) => {
            return {
              name: team.team,
              img: team.logo,
            };
          })
        )
      )
      .subscribe((res) => {
        this.teamData = res;
        console.log(this.teamData);
      });
  }
}
