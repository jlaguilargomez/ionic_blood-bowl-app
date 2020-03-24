import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.page.html',
  styleUrls: ['./skills.page.scss']
})
export class SkillsPage implements OnInit {
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
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getSkills().subscribe(data => {
      console.log(data);
    });
  }
}