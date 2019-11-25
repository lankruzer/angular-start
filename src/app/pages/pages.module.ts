import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListComponent } from './page-course-list/page-course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { CourseListComponent } from './page-course-list/course-list/course-list.component';
import { CourseListItemComponent } from './page-course-list/course-list-item/course-list-item.component';
import { CoreModule } from '../core/core.module';
import { SearchFormComponent } from './page-course-list/search-form/search-form.component';
import { DateFreshStatusDirective } from './page-course-list/course-list-item/date-fresh-status.directive';

@NgModule({
  declarations: [
    PageCourseListComponent,
    PageNotFoundComponent,
    CourseListComponent,
    CourseListItemComponent,
    SearchFormComponent,
    DateFreshStatusDirective
  ],
  imports: [CommonModule, RouterModule, CoreModule],
  exports: [PageCourseListComponent, PageNotFoundComponent]
})
export class PagesModule {}
