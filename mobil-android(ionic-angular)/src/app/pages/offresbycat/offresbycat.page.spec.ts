import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffresbycatPage } from './offresbycat.page';

describe('OffresbycatPage', () => {
  let component: OffresbycatPage;
  let fixture: ComponentFixture<OffresbycatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffresbycatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffresbycatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
