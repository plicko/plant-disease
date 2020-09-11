import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CoronaNewsPage } from './corona-news.page';

describe('CoronaNewsPage', () => {
  let component: CoronaNewsPage;
  let fixture: ComponentFixture<CoronaNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoronaNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CoronaNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
