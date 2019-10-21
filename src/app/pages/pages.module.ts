import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListComponent } from './page-course-list/page-course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import {CourseListModule} from "../course-list/course-list.module";



@NgModule({
  declarations: [PageCourseListComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
    CourseListModule
  ],
  exports: [
    PageCourseListComponent,
    PageNotFoundComponent
  ]
})
export class PagesModule { }
