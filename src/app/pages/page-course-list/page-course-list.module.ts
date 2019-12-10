import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListRoutingModule } from './page-course-list-routing.module';
import { PageCourseListComponent } from './page-course-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { CoreModule } from '../../core/core.module';
import { SearchFormComponent } from './search-form/search-form.component';
import { OrderByCreationDatePipe } from './course-list/order-by-creation-date.pipe';
import { DateFreshStatusDirective } from './course-list-item/date-fresh-status.directive';
import { FormatDurationPipe } from './course-list-item/format-duration.pipe';

@NgModule({
  declarations: [
    PageCourseListComponent,
    CourseListComponent,
    CourseListItemComponent,
    SearchFormComponent,
    OrderByCreationDatePipe,
    DateFreshStatusDirective,
    FormatDurationPipe
  ],
  imports: [CommonModule, PageCourseListRoutingModule, CoreModule]
})
export class PageCourseListModule {}
