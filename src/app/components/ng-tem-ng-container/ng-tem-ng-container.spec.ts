import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemNgContainer } from './ng-tem-ng-container';

describe('NgTemNgContainer', () => {
  let component: NgTemNgContainer;
  let fixture: ComponentFixture<NgTemNgContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTemNgContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(NgTemNgContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
