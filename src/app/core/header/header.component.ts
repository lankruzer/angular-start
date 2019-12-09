import { Component, OnInit } from '@angular/core';
import './assets/ic-exit.svg';
import './assets/ic-user.svg';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActions: boolean = true;
  isAuth: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url, urlAfterRedirects } = event;
        const checkedUrl = urlAfterRedirects ? urlAfterRedirects : url;
        this.isActions = checkedUrl !== '/login';
      }
    });
  }

  ngOnInit() {
    this.isAuth = this.authService.isAuth();
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
