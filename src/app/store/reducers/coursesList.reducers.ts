import { ICoursesListState, initialCoursesListState } from '../state/coursesList.state';
import { CoursesListActions, ECoursesListActions } from '../actions/coursesList.actions';

export const coursesListReducers = (state = initialCoursesListState, action: CoursesListActions): ICoursesListState => {
  switch (action.type) {
    case ECoursesListActions.GetCoursesListFailure:
      return {
        ...state,
        coursesList: [],
        isLoadMore: false
      };
    case ECoursesListActions.GetCoursesListSuccess:
      return {
        ...state,
        coursesList: action.payload
      };
    case ECoursesListActions.GetCoursesListItemSuccess:
      return {
        ...state,
        editableCourseListItem: action.payload
      };
    case ECoursesListActions.SetIsLoadMore:
      return {
        ...state,
        isLoadMore: action.payload
      };
    default:
      return state;
  }
};
