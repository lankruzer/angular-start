import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuth: boolean = false;

  public onUserLogin = (): void => {
    console.log('User login');

    this.isAuth = true;
  };

  public onUserLogout = (): void => {
    console.log('User logout');

    this.isAuth = false;
  };

  constructor() {}

  ngOnInit() {}
}
