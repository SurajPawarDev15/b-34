import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUser } from './super-user';

describe('SuperUser', () => {
  let component: SuperUser;
  let fixture: ComponentFixture<SuperUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperUser],
    }).compileComponents();

    fixture = TestBed.createComponent(SuperUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
