import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { IAppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { selectIsAuth, selectUser } from '../../store/selectors/auth.selector';
import { GetUser, Logout } from '../../store/actions/auth.actions';
import { User } from '../../user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuth = false;
  login: string;

  constructor(private authService: AuthService, private router: Router, private store: Store<IAppState>) {
    this.store.select(selectIsAuth).subscribe((isAuth: boolean) => {
      this.isAuth = isAuth;

      if (isAuth) {
        this.store.dispatch(new GetUser());
      }
    });

    this.store.select(selectUser).subscribe((user: User) => this.login = user && user.login || '');
  }

  ngOnInit() {}

  onUserLogout(): void {
    this.store.dispatch(new Logout());
    this.router.navigate(['login']);
  }
}
