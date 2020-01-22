import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { IAppState } from '../state/app.state';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import {
  EAuthActions,
  GetUser,
  GetUserSuccess,
  Login,
  LoginFailure,
  LoginSuccess,
  Logout,
  LogoutSuccess,
  SetIsAuth
} from '../actions/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../../user.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.Login),
    switchMap(action => this.authService.login(action.payload.login, action.payload.password).pipe(
      map(({ token }) => {
        window.localStorage.setItem('token', token);
        return new LoginSuccess();
      }),
      map(() => {
        this.router.navigate(['courses']);
        return new SetIsAuth(true);
      }),
      catchError((err) => of(new LoginFailure(err.error)))
    ))
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<Logout>(EAuthActions.Logout),
    map(() => this.authService.logout()),
    switchMap(() => of(new LogoutSuccess(), new SetIsAuth(false)))
  );

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EAuthActions.GetUser),
    switchMap(() => this.authService.getUserInfo()),
    switchMap((userData: User) => of(new GetUserSuccess(userData)))
  );

  constructor(private authService: AuthService, private actions$: Actions, private store: Store<IAppState>, private router: Router) {}
}
