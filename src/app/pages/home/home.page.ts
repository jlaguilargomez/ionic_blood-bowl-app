import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getTeams().subscribe(console.log);
  }
}
