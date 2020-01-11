import { Injectable } from '@angular/core';
import { CourseListService } from '../../pages/page-course-list/course-list.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import {
  CreateCoursesListItem, CreateCoursesListItemSuccess,
  DeleteCoursesListItem,
  DeleteCoursesListItemSuccess,
  ECoursesListActions, EditCoursesListItem,
  GetCoursesList, GetCoursesListItem, GetCoursesListItemSuccess,
  GetCoursesListSuccess
} from '../actions/coursesList.actions';
import { map, switchMap } from 'rxjs/operators';
import { CourseListItem } from '../../pages/page-course-list/course-list-item.model';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class CoursesListEffects {
  @Effect()
  $getCoursesList = this.actions$.pipe(
    ofType<GetCoursesList>(ECoursesListActions.GetCoursesList),
    map(({ payload }) => payload),
    switchMap(({ start, count, query }) =>  this.coursesListService.getList(start, count, query)),
    switchMap((coursesList: CourseListItem[]) => {
      console.log('effect coursesList = ', coursesList);
      return of(new GetCoursesListSuccess(coursesList));
    })
  );

  @Effect()
  $getCourseListItem = this.actions$.pipe(
    ofType<GetCoursesListItem>(ECoursesListActions.GetCoursesListItem),
    map(({ payload }) => payload),
    switchMap((id) =>  this.coursesListService.getListItemById(id)),
    switchMap((coursesList: CourseListItem[]) => {
      console.log('coursesList - ', coursesList);
      return of(new GetCoursesListItemSuccess(coursesList[0]));
    })
  );

  @Effect()
  $createCourseListItem = this.actions$.pipe(
    ofType<CreateCoursesListItem>(ECoursesListActions.CreateCoursesListItem),
    map(({ payload }) => payload),
    switchMap((courseListItem: CourseListItem) => this.coursesListService.createListItem(courseListItem)),
    switchMap((courseListItem: CourseListItem) => {
      this.router.navigate(['/courses']);
      return of(new CreateCoursesListItemSuccess(courseListItem));
    })
  );

  @Effect()
  $editCourseListItem = this.actions$.pipe(
    ofType<EditCoursesListItem>(ECoursesListActions.EditCoursesListItem),
    map(({ payload }) => payload),
    switchMap((courseListItem: CourseListItem) =>  this.coursesListService.editListItem(courseListItem)),
    switchMap((courseListItem: CourseListItem) => {
      this.router.navigate(['/courses']);
      return of(new CreateCoursesListItemSuccess(courseListItem));
    })
  );

  @Effect()
  $deleteCourseListItem = this.actions$.pipe(
    ofType<DeleteCoursesListItem>(ECoursesListActions.DeleteCoursesListItem),
    map(({ payload }) => payload),
    switchMap((id) =>  this.coursesListService.deleteListItem(id)),
    switchMap(() => of(new DeleteCoursesListItemSuccess()))
  );

  constructor(
    private coursesListService: CourseListService,
    private actions$: Actions,
    private store: Store<IAppState>,
    private router: Router
  ) {}
}
