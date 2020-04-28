import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessalertComponent } from './successalert.component';

describe('SuccessalertComponent', () => {
  let component: SuccessalertComponent;
  let fixture: ComponentFixture<SuccessalertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessalertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessalertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
