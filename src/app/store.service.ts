import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { SkillData, TeamData } from './data.model';
import { map, filter, find, tap } from 'rxjs/operators';

export interface SkillType {
  type: string;
  id: string;
  link: string;
}

@Injectable({
  providedIn: 'root',
})
export class Store {
  private subjectSkillData = new BehaviorSubject<SkillData[]>([]);
  private subjectTeamData = new BehaviorSubject<TeamData[]>([]);

  skillData$ = this.subjectSkillData.asObservable();
  teamData$ = this.subjectTeamData.asObservable();

  constructor(private http: HttpClient) {}

  getSkillData(): void {
    const http$ = this.getBackData('skills');

    http$
      .pipe(tap(() => console.log('skill data received from back!')))
      .subscribe((data: SkillData[]) => {
        this.subjectSkillData.next(data);
      });
  }

  getTeamData() {
    const http$ = this.getBackData('teams');

    http$
      .pipe(tap(() => console.log('team data received from back!')))
      .subscribe((data: TeamData[]) => {
        this.subjectTeamData.next(data);
      });
  }

  private getBackData(dataId: string) {
    return this.http.get(
      `https://blood-bowl-app.firebaseio.com/${dataId}.json`
    );
  }

  // getSkills(): Observable<any> {
  //   return this.http.get('https://blood-bowl-app.firebaseio.com/skills.json');
  // }

  // getSkill(id) {
  //   console.log('funciona');
  //   return this.getSkills().pipe(map(el => el + 10));
  // }

  // getTeams(): Observable<any> {
  //   return this.http.get('https://blood-bowl-app.firebaseio.com/teams.json');
  // }
}
