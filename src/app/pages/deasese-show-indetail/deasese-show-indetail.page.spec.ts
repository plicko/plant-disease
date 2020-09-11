import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeaseseShowIndetailPage } from './deasese-show-indetail.page';

describe('DeaseseShowIndetailPage', () => {
  let component: DeaseseShowIndetailPage;
  let fixture: ComponentFixture<DeaseseShowIndetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeaseseShowIndetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeaseseShowIndetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
