import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillData, TeamData } from './data.model';
import { map, filter, find } from 'rxjs/operators';

export interface SkillType {
  type: string;
  id: string;
  link: string;
}

@Injectable({
  providedIn: 'root'
})
export class Store {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get('https://blood-bowl-app.firebaseio.com/skills.json');
  }

  getSkill(id) {
    console.log('funciona');
    return this.getSkills().pipe(map(el => el + 10));
  }

  getTeams(): Observable<any> {
    return this.http.get('https://blood-bowl-app.firebaseio.com/teams.json');
  }
}
