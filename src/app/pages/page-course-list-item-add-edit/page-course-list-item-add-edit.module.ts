import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListItemAddEditRoutingModule } from './page-course-list-item-add-edit-routing.module';
import { PageCourseListItemAddEditComponent } from './page-course-list-item-add-edit.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DateFieldComponent } from './date-field/date-field.component';
import { DurationFieldComponent } from './duration-field/duration-field.component';
import { AuthorsFieldComponent } from './authors-field/authors-field.component';

@NgModule({
  declarations: [PageCourseListItemAddEditComponent, DateFieldComponent, DurationFieldComponent, AuthorsFieldComponent],
  imports: [CommonModule, PageCourseListItemAddEditRoutingModule, CoreModule, FormsModule, SharedModule, ReactiveFormsModule]
})
export class PageCourseListItemAddEditModule {}
