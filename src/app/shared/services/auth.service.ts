import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    isAuth: BehaviorSubject<string>;

  constructor(private http: HttpClient) {
    this.isAuth = new BehaviorSubject<string>(localStorage.getItem('token'));
  }

  login(login, password) {
    return this.http.post<any>(`${API_URL}/auth/login`, { login, password })
      .pipe(map(({ token }) => {
        localStorage.setItem('token', token);
        this.isAuth.next(token);
        return token;
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.isAuth.next('');
  }

  getUserInfo() {
    return this.http.post<any>(`${API_URL}/auth/userinfo`, { token: window.localStorage.token });
  }
}
