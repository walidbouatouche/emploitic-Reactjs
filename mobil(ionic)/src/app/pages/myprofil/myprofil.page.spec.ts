import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyprofilPage } from './myprofil.page';

describe('MyprofilPage', () => {
  let component: MyprofilPage;
  let fixture: ComponentFixture<MyprofilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyprofilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyprofilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
