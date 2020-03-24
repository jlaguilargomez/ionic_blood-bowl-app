import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})
export class SkillsPage implements OnInit {
  ribbonText = 'Habilidades';
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSkills().subscribe(data => {
      console.log(data);
    });
  }
}
