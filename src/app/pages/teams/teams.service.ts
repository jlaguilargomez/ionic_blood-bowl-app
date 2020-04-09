import { Injectable } from '@angular/core';
import { Store } from 'src/app/store.service';
import { map } from 'rxjs/operators';
import { TeamData } from 'src/app/data.model';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  constructor(private _store: Store) {}

  getTeamInfo(teamSelected: string) {
    return this._store.teamData$.pipe(
      map(
        (res: TeamData[]) =>
          res.filter(
            (team: TeamData) => team.team.toLocaleLowerCase() === teamSelected
          )[0]
      )
    );
  }
}
