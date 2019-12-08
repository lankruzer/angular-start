import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCourseListComponent } from './pages/page-course-list/page-course-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: PageCourseListComponent },
  { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' },
  { path: 'page-not-found', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
