import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive } from './directive';

describe('Directive', () => {
  let component: Directive;
  let fixture: ComponentFixture<Directive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directive],
    }).compileComponents();

    fixture = TestBed.createComponent(Directive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
