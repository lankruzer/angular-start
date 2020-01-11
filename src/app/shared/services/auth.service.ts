import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { SetIsAuth } from '../../store/actions/auth.actions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<IAppState>) {
    if (localStorage.getItem('token')) {
      this.store.dispatch(new SetIsAuth(true));
    }
  }

  login(login, password) {
    return this.http.post<any>(`${API_URL}/auth/login`, { login, password })
      .pipe(
        map(({ token }) => {
          localStorage.setItem('token', token);
          return token;
        })
      );
  }

  logout() {
    console.log('logout service');
    localStorage.removeItem('token');
  }

  getUserInfo() {
    return this.http.post<any>(`${API_URL}/auth/userinfo`, { token: window.localStorage.token });
  }
}
