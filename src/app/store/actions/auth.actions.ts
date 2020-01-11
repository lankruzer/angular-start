import { Action } from '@ngrx/store';
import { User } from '../../user.model';

export enum EAuthActions {
  SetIsAuth = '[Auth] SetIsAuth',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginFailure',
  Logout = '[Auth] Logout',
  LogoutSuccess = '[Auth] LogoutSuccess',
  GetUser = '[Auth] GetUser',
  GetUserSuccess = '[Auth] GetUserSuccess',
  GetUserFailure = '[Auth] GetUserFailure',
}

export class SetIsAuth implements Action {
  public readonly type = EAuthActions.SetIsAuth;
  constructor(public payload: boolean) {}
}

export class Login implements Action {
  public readonly type = EAuthActions.Login;
  constructor(public payload: { login: string, password: string }) {}
}

export class LoginSuccess implements Action {
  public readonly type = EAuthActions.LoginSuccess;
}

export class LoginFailure implements Action {
  public readonly type = EAuthActions.LoginFailure;
}

export class Logout implements Action {
  public readonly type = EAuthActions.Logout;
}

export class LogoutSuccess implements Action {
  public readonly type = EAuthActions.LogoutSuccess;
}

export class GetUser implements Action {
  public readonly type = EAuthActions.GetUser;
}

export class GetUserSuccess implements Action {
  public readonly type = EAuthActions.GetUserSuccess;
  constructor(public payload: User) {}
}

export class GetUserFailure implements Action {
  public readonly type = EAuthActions.GetUserFailure;
}

export type AuthActions =
  SetIsAuth |
  Login |
  LoginSuccess |
  LoginFailure |
  Logout |
  LogoutSuccess |
  GetUser |
  GetUserSuccess |
  GetUserFailure;
