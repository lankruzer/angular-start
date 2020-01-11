import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducers = (state = initialAuthState, action: AuthActions): IAuthState => {
  switch (action.type) {
    case EAuthActions.SetIsAuth: {
      return {
        ...state,
        isAuth: action.payload
      };
    }
    case EAuthActions.LoginSuccess: {
      return {
        ...state,
        isAuth: true
      };
    }
    case EAuthActions.LoginFailure: {
      return {
        ...state,
        isAuth: false
      };
    }
    case EAuthActions.LogoutSuccess: {
      return {
        ...state,
        isAuth: false,
        user: null
      };
    }
    case EAuthActions.GetUserSuccess: {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
