import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningalertComponent } from './warningalert.component';

describe('WarningalertComponent', () => {
  let component: WarningalertComponent;
  let fixture: ComponentFixture<WarningalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarningalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
