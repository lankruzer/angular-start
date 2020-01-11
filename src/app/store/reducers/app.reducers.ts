import { ActionReducerMap } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { authReducers } from './auth.reducers';
import { coursesListReducers } from './coursesList.reducers';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  auth: authReducers,
  coursesList: coursesListReducers
};
