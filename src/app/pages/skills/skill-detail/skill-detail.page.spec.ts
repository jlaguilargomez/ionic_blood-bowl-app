import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkillDetailPage } from './skill-detail.page';

describe('SkillDetailPage', () => {
  let component: SkillDetailPage;
  let fixture: ComponentFixture<SkillDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkillDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
