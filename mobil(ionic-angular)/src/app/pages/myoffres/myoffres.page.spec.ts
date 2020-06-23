import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MyoffresPage } from './myoffres.page';

describe('MyoffresPage', () => {
  let component: MyoffresPage;
  let fixture: ComponentFixture<MyoffresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyoffresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MyoffresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
