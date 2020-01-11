import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ICoursesListState } from '../state/coursesList.state';

const selectCoursesListState = (state: IAppState) => state.coursesList;

export const selectCoursesList = createSelector(
  selectCoursesListState,
  (state: ICoursesListState) => state.coursesList
);

export const selectIsLoadMore = createSelector(
  selectCoursesListState,
  (state: ICoursesListState) => state.isLoadMore
);

export const selectEditableCourseListItem = createSelector(
  selectCoursesListState,
  (state: ICoursesListState) => state.editableCourseListItem
);
