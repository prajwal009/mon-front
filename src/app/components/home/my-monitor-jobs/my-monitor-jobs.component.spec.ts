import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMonitorJobsComponent } from './my-monitor-jobs.component';

describe('MyMonitorJobsComponent', () => {
  let component: MyMonitorJobsComponent;
  let fixture: ComponentFixture<MyMonitorJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMonitorJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMonitorJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
