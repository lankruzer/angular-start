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
  login: string;
  isActions: boolean = true;
  isAuth: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const { url, urlAfterRedirects } = event;
        const checkedUrl = urlAfterRedirects ? urlAfterRedirects : url;
        this.updateUserState();
        this.isActions = checkedUrl !== '/login';
      }
    });
  }

  ngOnInit() {
    this.updateUserState();
  }

  updateUserState() {
    this.isAuth = this.authService.isAuth();
    if (this.isAuth) {
      this.authService.getUserInfo().subscribe(
        data => {
          this.login = data.login || '';
          return data;
        },
        error => {
          console.error('get user error = ', error);
          return error;
        }
      );
    }
  }

  onUserLogout = (): void => {
    this.authService.logout();
    this.isAuth = false;
    this.router.navigate(['login']);
  };
}
