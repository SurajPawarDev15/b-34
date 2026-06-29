import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignKey } from './foreign-key';

describe('ForeignKey', () => {
  let component: ForeignKey;
  let fixture: ComponentFixture<ForeignKey>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeignKey],
    }).compileComponents();

    fixture = TestBed.createComponent(ForeignKey);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
