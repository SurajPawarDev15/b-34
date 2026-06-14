import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDir } from './attr-dir';

describe('AttrDir', () => {
  let component: AttrDir;
  let fixture: ComponentFixture<AttrDir>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrDir],
    }).compileComponents();

    fixture = TestBed.createComponent(AttrDir);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
