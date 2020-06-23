import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffredetailsPage } from './offredetails.page';

describe('OffredetailsPage', () => {
  let component: OffredetailsPage;
  let fixture: ComponentFixture<OffredetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffredetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffredetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
