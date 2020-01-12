import { createSelector} from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IAuthState } from '../state/auth.state';

const selectAuthState = (state: IAppState) => state.auth;

export const selectIsAuth = createSelector(
  selectAuthState,
  (state: IAuthState) => state.isAuth
);

export const selectUser = createSelector(
  selectAuthState,
  (state: IAuthState) => state.user
);

export const selectLoginError = createSelector(
  selectAuthState,
  (state: IAuthState) => state.loginError
);
