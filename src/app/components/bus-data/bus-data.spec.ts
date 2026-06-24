import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusData } from './bus-data';

describe('BusData', () => {
  let component: BusData;
  let fixture: ComponentFixture<BusData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusData],
    }).compileComponents();

    fixture = TestBed.createComponent(BusData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
