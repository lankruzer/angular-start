import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCourseListItemAddEditComponent } from './page-course-list-item-add-edit.component';

describe('PageCourseListItemAddEditComponent', () => {
  let component: PageCourseListItemAddEditComponent;
  let fixture: ComponentFixture<PageCourseListItemAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageCourseListItemAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCourseListItemAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
