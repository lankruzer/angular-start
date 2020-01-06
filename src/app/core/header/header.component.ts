import { Component, OnDestroy, OnInit } from '@angular/core';
import './assets/ic-exit.svg';
import './assets/ic-user.svg';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  login: string;
  isActions = true;
  private isAuthSubs: Subscription;

  constructor(private authService: AuthService, private router: Router) {
    this.isActions = !!this.authService.isAuth.value;
    this.isAuthSubs = this.authService.isAuth
      .subscribe(isAuth => {
        this.isActions = !!isAuth;
        if (isAuth) {
          this.updateUserState();
        }
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.isAuthSubs.unsubscribe();
  }

  updateUserState() {
    if (this.authService.isAuth) {
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
    this.router.navigate(['login']);
  }
}
