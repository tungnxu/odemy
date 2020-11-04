import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseLiveDetailComponent } from './course-live-detail.component';

describe('CourseLiveDetailComponent', () => {
  let component: CourseLiveDetailComponent;
  let fixture: ComponentFixture<CourseLiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseLiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseLiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
