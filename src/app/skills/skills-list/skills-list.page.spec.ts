import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillsListPage } from './skills-list.page';

describe('SkillsListPage', () => {
  let component: SkillsListPage;
  let fixture: ComponentFixture<SkillsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
