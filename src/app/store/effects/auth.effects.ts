import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { IAppState } from '../state/app.state';
import { AuthService } from '../../shared/services/auth.service';
import { Store } from '@ngrx/store';
import { EAuthActions, GetUser, GetUserSuccess, Login, LoginSuccess, Logout, LogoutSuccess, SetIsAuth } from '../actions/auth.actions';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { User } from '../../user.model';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$.pipe(
    ofType<Login>(EAuthActions.Login),
    map(action => action.payload),
    switchMap(({ login, password }) => this.authService.login(login, password)),
    switchMap(() => of(new LoginSuccess(), new SetIsAuth(true)))
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

  constructor(private authService: AuthService, private actions$: Actions, private store: Store<IAppState>) {}
}
