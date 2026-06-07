import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyData } from './my-data';

describe('MyData', () => {
  let component: MyData;
  let fixture: ComponentFixture<MyData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyData],
    }).compileComponents();

    fixture = TestBed.createComponent(MyData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
