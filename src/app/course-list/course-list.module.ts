import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
