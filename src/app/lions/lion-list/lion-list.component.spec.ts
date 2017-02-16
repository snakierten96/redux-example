/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LionListComponent } from './lion-list.component';

describe('LionListComponent', () => {
  let component: LionListComponent;
  let fixture: ComponentFixture<LionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
