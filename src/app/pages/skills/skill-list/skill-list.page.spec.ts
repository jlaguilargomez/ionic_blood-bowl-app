import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillListPage } from './skill-list.page';

describe('SkillListPage', () => {
  let component: SkillListPage;
  let fixture: ComponentFixture<SkillListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
