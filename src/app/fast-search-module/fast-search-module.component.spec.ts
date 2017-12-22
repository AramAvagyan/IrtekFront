import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FastSearchModuleComponent } from './fast-search-module.component';

describe('FastSearchModuleComponent', () => {
  let component: FastSearchModuleComponent;
  let fixture: ComponentFixture<FastSearchModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastSearchModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastSearchModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
