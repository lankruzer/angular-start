import { Injectable } from '@angular/core';
import { User } from '../../user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthState: boolean = true;
  userList: User[] = [
    {
      id: 0,
      login: '1 user',
      firstName: '1',
      lastName: 'Name',
      password: '123456'
    },
    {
      id: 1,
      login: '2 user',
      firstName: '2',
      lastName: 'Name',
      password: '123456'
    }
  ];

  constructor() {}

  login(userLogin: String, userPassword: String): boolean {
    console.log(`call login with: userLogin: ${userLogin}, userPassword: ${userPassword}`);
    this.isAuthState = true;
    return this.isAuthState;
  }

  logout(userLogin: String): boolean {
    console.log(`call logout with: userLogin: ${userLogin}`);
    this.isAuthState = false;
    return this.isAuthState;
  }

  isAuth(): boolean {
    console.log(`call isAuth with`);
    return this.isAuthState;
  }

  getUserInfo(userLogin: String): object {
    console.log(`call getUserInfo with: userLogin: ${userLogin}`);
    return {
      userLogin: 'SomeLogin'
    };
  }
}
