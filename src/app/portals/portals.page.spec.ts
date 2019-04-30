import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalsPage } from './portals.page';

describe('PortalsPage', () => {
  let component: PortalsPage;
  let fixture: ComponentFixture<PortalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
