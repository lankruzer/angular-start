import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageCourseListComponent } from './page-course-list/page-course-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from "@angular/router";
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CourseListComponent } from './page-course-list/course-list/course-list.component';
import { CourseListItemComponent } from './page-course-list/course-list-item/course-list-item.component';



@NgModule({
  declarations: [PageCourseListComponent, PageNotFoundComponent, BreadcrumbsComponent, CourseListComponent, CourseListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    PageCourseListComponent,
    PageNotFoundComponent,
    BreadcrumbsComponent
  ]
})
export class PagesModule { }
