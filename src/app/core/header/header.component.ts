import { Component, OnInit } from '@angular/core';
// Как правильно импортировать ресуры?
import icUserLogin from './assets/ic-user.svg';
import icUserLogout from './assets/ic-exit.svg';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isAuth : boolean = false;
  public icUserLogin : any = icUserLogin;
  public icUserLogout : any = icUserLogout;

  public onUserLogin = () : void => {
    console.log('User login');

    this.isAuth = true;
  };

  public onUserLogout = () : void => {
    console.log('User logout');

    this.isAuth = false;
  };

  constructor() { }

  ngOnInit() {
  }

}
