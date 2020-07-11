import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExpOrdeploComponent } from './exp-ordeplo.component';

describe('ExpOrdeploComponent', () => {
  let component: ExpOrdeploComponent;
  let fixture: ComponentFixture<ExpOrdeploComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpOrdeploComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExpOrdeploComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
