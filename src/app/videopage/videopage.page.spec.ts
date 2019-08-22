import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopagePage } from './videopage.page';

describe('VideopagePage', () => {
  let component: VideopagePage;
  let fixture: ComponentFixture<VideopagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideopagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
