import { RouterReducerState } from '@ngrx/router-store';
import { IAuthState, initialAuthState } from './auth.state';
import { ICoursesListState, initialCoursesListState } from './coursesList.state';

export interface IAppState {
  router?: RouterReducerState;
  auth: IAuthState;
  coursesList: ICoursesListState;
}

export const initialAppState: IAppState = {
  auth: initialAuthState,
  coursesList: initialCoursesListState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
