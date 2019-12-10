import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCourseListComponent } from './page-course-list.component';

const routes: Routes = [
  {
    path: '',
    component: PageCourseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCourseListRoutingModule {}
