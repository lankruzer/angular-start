import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCourseListComponent } from "./pages/page-course-list/page-course-list.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";


const appRoutes: Routes = [
  { path: '', component: PageCourseListComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
