import { Action } from '@ngrx/store';
import { CourseListItem } from '../../pages/page-course-list/course-list-item.model';

export enum ECoursesListActions {
  GetCoursesList = '[CoursesList] GetCoursesList',
  GetCoursesListSuccess = '[CoursesList] GetCoursesListSuccess',
  GetCoursesListFailure = '[CoursesList] GetCoursesListFailure',
  GetCoursesListItem = '[CoursesList] GetCoursesListItem',
  GetCoursesListItemSuccess = '[CoursesList] GetCoursesListItemSuccess',
  GetCoursesListItemFailure = '[CoursesList] GetCoursesListItemFailure',
  CreateCoursesListItem = '[CoursesList] CreateCoursesListItem',
  CreateCoursesListItemSuccess = '[CoursesList] CreateCoursesListItemSuccess',
  CreateCoursesListItemFailure = '[CoursesList] CreateCoursesListItemFailure',
  EditCoursesListItem = '[CoursesList] EditCoursesListItem',
  EditCoursesListItemSuccess = '[CoursesList] EditCoursesListItemSuccess',
  EditCoursesListItemFailure = '[CoursesList] EditCoursesListItemFailure',
  DeleteCoursesListItem = '[CoursesList] DeleteCoursesListItem',
  DeleteCoursesListItemSuccess = '[CoursesList] DeleteCoursesListItemSuccess',
  DeleteCoursesListItemFailure = '[CoursesList] DeleteCoursesListItemFailure',
  SetIsLoadMore = '[CoursesList] SetIsLoadMore',
  SetCount = '[CoursesList] SetCount'
}

export class GetCoursesList implements Action {
  public readonly type = ECoursesListActions.GetCoursesList;
  constructor(public payload: { start: number, count: number, query?: string }) {}
}

export class GetCoursesListSuccess implements Action {
  public readonly type = ECoursesListActions.GetCoursesListSuccess;
  constructor(public payload: CourseListItem[]) {}
}

export class GetCoursesListFailure implements Action {
  public readonly type = ECoursesListActions.GetCoursesListFailure;
  constructor(public payload: string) {}
}

export class GetCoursesListItem implements Action {
  public readonly type = ECoursesListActions.GetCoursesListItem;
  constructor(public payload: string) {}
}

export class GetCoursesListItemSuccess implements Action {
  public readonly type = ECoursesListActions.GetCoursesListItemSuccess;
  constructor(public payload: CourseListItem) {}
}

export class GetCoursesListItemFailure implements Action {
  public readonly type = ECoursesListActions.GetCoursesListItemFailure;
  constructor(public payload: string) {}
}

export class CreateCoursesListItem implements Action {
  public readonly type = ECoursesListActions.CreateCoursesListItem;
  constructor(public payload: CourseListItem) {}
}

export class CreateCoursesListItemSuccess implements Action {
  public readonly type = ECoursesListActions.CreateCoursesListItemSuccess;
  constructor(public payload: CourseListItem) {}
}

export class CreateCoursesListItemFailure implements Action {
  public readonly type = ECoursesListActions.CreateCoursesListItemFailure;
  constructor(public payload: string) {}
}

export class EditCoursesListItem implements Action {
  public readonly type = ECoursesListActions.EditCoursesListItem;
  constructor(public payload: CourseListItem) {}
}

export class EditCoursesListItemSuccess implements Action {
  public readonly type = ECoursesListActions.EditCoursesListItemSuccess;
  constructor(public payload: CourseListItem) {}
}

export class EditCoursesListItemFailure implements Action {
  public readonly type = ECoursesListActions.EditCoursesListItemFailure;
  constructor(public payload: string) {}
}

export class DeleteCoursesListItem implements Action {
  public readonly type = ECoursesListActions.DeleteCoursesListItem;
  constructor(public payload: number) {}
}

export class DeleteCoursesListItemSuccess implements Action {
  public readonly type = ECoursesListActions.DeleteCoursesListItemSuccess;
}

export class DeleteCoursesListItemFailure implements Action {
  public readonly type = ECoursesListActions.DeleteCoursesListItemFailure;
  constructor(public payload: string) {}
}

export class SetIsLoadMore implements Action {
  public readonly type = ECoursesListActions.SetIsLoadMore;
  constructor(public payload: boolean) {}
}

export class SetCount implements Action {
  public readonly type = ECoursesListActions.SetCount;
  constructor(public payload: number) {}
}

export type CoursesListActions =
  GetCoursesList |
  GetCoursesListSuccess |
  GetCoursesListFailure |
  GetCoursesListItem |
  GetCoursesListItemSuccess |
  GetCoursesListItemFailure |
  DeleteCoursesListItem |
  DeleteCoursesListItemSuccess |
  DeleteCoursesListItemFailure |
  SetIsLoadMore |
  SetCount;
