import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardYSoftSkiltComponent } from './hard-ysoft-skilt.component';

describe('HardYSoftSkiltComponent', () => {
  let component: HardYSoftSkiltComponent;
  let fixture: ComponentFixture<HardYSoftSkiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardYSoftSkiltComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardYSoftSkiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
