import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from '../../store/state/app.state';
import { Store } from '@ngrx/store';
import { Login } from '../../store/actions/auth.actions';
import { FormGroup } from '@angular/forms';
import { selectLoginError } from '../../store/selectors/auth.selector';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  login: string;
  password: string;
  error: string;

  constructor(private router: Router, private store: Store<IAppState>) {
    this.store.select(selectLoginError).subscribe((error) => this.error = error);
  }

  ngOnInit() {}

  onLoginSubmit(form: FormGroup) {
    if (form.valid) {
      this.store.dispatch(new Login(form.value));
    }
  }
}
