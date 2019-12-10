import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageCourseListComponent } from './pages/page-course-list/page-course-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/page-login/page-login.module').then(m => m.PageLoginModule)
  },
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/page-course-list/page-course-list.module').then(m => m.PageCourseListModule)
  },
  {
    path: '**',
    redirectTo: '/page-not-found',
    pathMatch: 'full'
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
