import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpoOrdeploFormComponent } from './expo-ordeplo-form.component';

describe('ExpoOrdeploFormComponent', () => {
  let component: ExpoOrdeploFormComponent;
  let fixture: ComponentFixture<ExpoOrdeploFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpoOrdeploFormComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpoOrdeploFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
