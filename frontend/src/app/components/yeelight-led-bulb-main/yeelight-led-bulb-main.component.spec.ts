import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeelightLedBulbMainComponent } from './yeelight-led-bulb-main.component';

describe('YeelightLedBulbMainComponent', () => {
  let component: YeelightLedBulbMainComponent;
  let fixture: ComponentFixture<YeelightLedBulbMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeelightLedBulbMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeelightLedBulbMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
