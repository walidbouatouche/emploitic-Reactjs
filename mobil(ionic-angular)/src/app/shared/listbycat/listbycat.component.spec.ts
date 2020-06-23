import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListbycatComponent } from './listbycat.component';

describe('ListbycatComponent', () => {
  let component: ListbycatComponent;
  let fixture: ComponentFixture<ListbycatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListbycatComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListbycatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
