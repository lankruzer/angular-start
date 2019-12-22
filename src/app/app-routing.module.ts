import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

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
    canActivate: [AuthGuard],
    loadChildren: () => import('./pages/page-course-list/page-course-list.module').then(m => m.PageCourseListModule)
  },
  {
    path: 'courses/:id',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/page-course-list-item-add-edit/page-course-list-item-add-edit.module').then(
        m => m.PageCourseListItemAddEditModule
      )
  },
  {
    path: 'courses/new',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./pages/page-course-list-item-add-edit/page-course-list-item-add-edit.module').then(
        m => m.PageCourseListItemAddEditModule
      )
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
