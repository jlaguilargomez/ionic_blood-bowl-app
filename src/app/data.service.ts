import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface SkillType {
  type: string;
  id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  skillTypes: SkillType[] = [
    {
      type: 'G',
      id: 'general'
    },
    {
      type: 'F',
      id: 'fuerza'
    },
    {
      type: 'A',
      id: 'agilidad'
    },
    {
      type: 'P',
      id: 'pase'
    },
    {
      type: 'E',
      id: 'extraordinaria'
    },
    {
      type: 'M',
      id: 'mutación'
    }
  ];

  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get('https://blood-bowl-app.firebaseio.com/skills.json');
  }

  getTeams() {
    return this.http.get('https://blood-bowl-app.firebaseio.com/teams.json');
  }
}
