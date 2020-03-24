import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RibbonTitleComponent } from './ribbon-title.component';

describe('RibbonTitleComponent', () => {
  let component: RibbonTitleComponent;
  let fixture: ComponentFixture<RibbonTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RibbonTitleComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RibbonTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
