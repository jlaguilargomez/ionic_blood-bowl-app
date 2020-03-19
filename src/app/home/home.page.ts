import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSkills().subscribe(data => console.log(data));
  }
}
