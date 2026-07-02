import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewchildEx } from './viewchild-ex';

describe('ViewchildEx', () => {
  let component: ViewchildEx;
  let fixture: ComponentFixture<ViewchildEx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildEx],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewchildEx);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
