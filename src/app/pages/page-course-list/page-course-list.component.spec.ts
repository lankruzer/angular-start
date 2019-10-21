import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCourseListComponent } from './page-course-list.component';

describe('PageCourseListComponent', () => {
  let component: PageCourseListComponent;
  let fixture: ComponentFixture<PageCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCourseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
