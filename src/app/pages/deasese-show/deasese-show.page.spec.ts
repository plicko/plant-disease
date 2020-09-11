import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeaseseShowPage } from './deasese-show.page';

describe('DeaseseShowPage', () => {
  let component: DeaseseShowPage;
  let fixture: ComponentFixture<DeaseseShowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeaseseShowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeaseseShowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
