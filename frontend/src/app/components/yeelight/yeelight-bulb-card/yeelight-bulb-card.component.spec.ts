import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeelightBulbCardComponent } from './yeelight-bulb-card.component';

describe('YeelightBulbCardComponent', () => {
  let component: YeelightBulbCardComponent;
  let fixture: ComponentFixture<YeelightBulbCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeelightBulbCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeelightBulbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
