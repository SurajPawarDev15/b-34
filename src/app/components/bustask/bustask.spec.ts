import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bustask } from './bustask';

describe('Bustask', () => {
  let component: Bustask;
  let fixture: ComponentFixture<Bustask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bustask],
    }).compileComponents();

    fixture = TestBed.createComponent(Bustask);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
