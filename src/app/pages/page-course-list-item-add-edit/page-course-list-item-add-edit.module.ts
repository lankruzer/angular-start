import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListItemAddEditRoutingModule } from './page-course-list-item-add-edit-routing.module';
import { PageCourseListItemAddEditComponent } from './page-course-list-item-add-edit.component';
import { CoreModule } from '../../core/core.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PageCourseListItemAddEditComponent],
  imports: [CommonModule, PageCourseListItemAddEditRoutingModule, CoreModule, FormsModule, SharedModule]
})
export class PageCourseListItemAddEditModule {}
