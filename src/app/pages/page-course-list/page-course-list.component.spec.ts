import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCourseListComponent } from './page-course-list.component';
import { BreadcrumbsComponent } from '../../core/breadcrumbs/breadcrumbs.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CourseListComponent } from './course-list/course-list.component';
import { RouterModule } from '@angular/router';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('PageCourseListComponent', () => {
  let component: PageCourseListComponent;
  let fixture: ComponentFixture<PageCourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [PageCourseListComponent, BreadcrumbsComponent, SearchFormComponent, CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageCourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Search change', () => {
    component.searchQuery = '';
    fixture.detectChanges();

    component.searchChange('test value');

    expect(component.searchQuery).toBe('test value');
  });

  it('Search submit', () => {
    component.searchQuery = 'test value';
    fixture.detectChanges();

    component.searchSubmit();

    expect(component.searchQuery).toBe('');
  });
});
