import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeCustom } from './pipe-custom';

describe('PipeCustom', () => {
  let component: PipeCustom;
  let fixture: ComponentFixture<PipeCustom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeCustom],
    }).compileComponents();

    fixture = TestBed.createComponent(PipeCustom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
