import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCourseListItemAddEditComponent } from './page-course-list-item-add-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PageCourseListItemAddEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageCourseListItemAddEditRoutingModule {}
