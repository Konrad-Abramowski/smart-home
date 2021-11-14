import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinterMainComponent } from './printer-main.component';

describe('PrinterMainComponent', () => {
  let component: PrinterMainComponent;
  let fixture: ComponentFixture<PrinterMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinterMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
