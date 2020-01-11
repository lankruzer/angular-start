import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { IAppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { Login } from '../../store/actions/auth.actions';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  login: string;
  password: string;
  error: string;

  constructor(private router: Router, private store: Store<IAppState>) {}

  ngOnInit() {}

  onLoginSubmit(event) {
    event.preventDefault();
    this.error = '';
    this.store.dispatch(new Login({ login: this.login, password: this.password }));
    this.router.navigate(['courses']);
  }
}
