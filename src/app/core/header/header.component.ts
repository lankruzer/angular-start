import { Component, OnInit } from '@angular/core';
import './assets/ic-exit.svg';
import './assets/ic-user.svg';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = true;

  constructor() {}

  ngOnInit() {}

  onUserLogin = (): void => {
    console.log('User login');

    this.isAuth = true;
  };

  onUserLogout = (): void => {
    console.log('User logout');

    this.isAuth = false;
  };
}
