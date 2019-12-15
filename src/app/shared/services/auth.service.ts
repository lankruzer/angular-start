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
      email: 'user1@gmail.com',
      firstName: '1',
      lastName: 'Name',
      password: '123456'
    },
    {
      id: 1,
      login: '2 user',
      email: 'user2@gmail.com',
      firstName: '2',
      lastName: 'Name',
      password: '654321'
    }
  ];

  constructor() {}

  login(email: String, userPassword: String): { error?: string; authState: boolean; user?: User } {
    console.log(`call login with: userLogin: ${email}, userPassword: ${userPassword}`);

    const user = this.userList.find(user => user.email === email.trim());

    if (!user) {
      this.isAuthState = false;
      return {
        error: 'User with this credentials not found',
        authState: this.isAuthState
      };
    }

    if (user.password !== userPassword) {
      this.isAuthState = false;
      return {
        error: 'Password incorrect, please try again',
        authState: this.isAuthState
      };
    }

    this.isAuthState = true;
    return {
      authState: this.isAuthState,
      user
    };
  }

  logout(): boolean {
    console.log(`call logout`);
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
