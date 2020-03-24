import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getSkills() {
    return this.http.get('https://blood-bowl-app.firebaseio.com/skills.json');
  }

  getTeams() {
    return this.http.get('https://blood-bowl-app.firebaseio.com/teams.json');
  }
}