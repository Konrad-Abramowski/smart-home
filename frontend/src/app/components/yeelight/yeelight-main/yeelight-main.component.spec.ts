import { ComponentFixture, TestBed } from '@angular/core/testing';
import {YeelightMainComponent} from "./yeelight-main.component";

describe('YeelightMainComponent', () => {
  let component: YeelightMainComponent;
  let fixture: ComponentFixture<YeelightMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YeelightMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YeelightMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
