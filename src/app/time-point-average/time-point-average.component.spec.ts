import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePointAverageComponent } from './time-point-average.component';

describe('TimePointAverageComponent', () => {
  let component: TimePointAverageComponent;
  let fixture: ComponentFixture<TimePointAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePointAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePointAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
