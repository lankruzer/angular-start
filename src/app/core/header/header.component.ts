import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth: boolean = false;

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
