import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientData } from './client-data';

describe('ClientData', () => {
  let component: ClientData;
  let fixture: ComponentFixture<ClientData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientData],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
