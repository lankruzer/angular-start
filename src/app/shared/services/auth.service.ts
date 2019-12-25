import { Injectable } from '@angular/core';
import { User } from '../../user.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(login: string, password: string) {
    return this.http.post<{ token?: string; status?: number; error?: string }>(`${API_URL}/auth/login`, {
      login,
      password
    });
  }

  logout(): void {
    window.localStorage.removeItem('token');
  }

  isAuth(): boolean {
    const token = window.localStorage.getItem('token');
    return !!token;
  }

  getUserInfo() {
    return this.http.post<any>(`${API_URL}/auth/userinfo`, { token: window.localStorage.token });
  }
}
