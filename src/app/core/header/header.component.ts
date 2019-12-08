import { Component, OnInit } from '@angular/core';
import './assets/ic-exit.svg';
import './assets/ic-user.svg';
import { AuthService } from '../../pages/page-login/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isAuth = this.authService.isAuth('SomeLogin');
  }

  onUserLogin = (): void => {
    console.log('User login');
    this.isAuth = this.authService.login('1 user', '123456');
  };

  onUserLogout = (): void => {
    console.log('User logout');

    this.isAuth = this.authService.logout('1 user');
  };
}
