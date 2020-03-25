import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillData, TeamData } from './data.model';

export interface SkillType {
  type: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSkills(): Observable<any> {
    return this.http.get('https://blood-bowl-app.firebaseio.com/skills.json');
  }

  getTeams(): Observable<any> {
    return this.http.get('https://blood-bowl-app.firebaseio.com/teams.json');
  }
}
