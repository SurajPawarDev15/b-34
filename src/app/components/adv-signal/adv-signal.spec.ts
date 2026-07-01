import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvSignal } from './adv-signal';

describe('AdvSignal', () => {
  let component: AdvSignal;
  let fixture: ComponentFixture<AdvSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(AdvSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
