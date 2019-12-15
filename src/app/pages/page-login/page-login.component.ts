import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageLoginComponent implements OnInit {
  private email: string;
  private password: string;
  private error: string = '';

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit(event) {
    event.preventDefault();
    this.error = '';
    console.log('Login submit event - ', event);

    if (!this.email || !this.password) {
      this.error = 'Please, fill email and password fields.';
      return;
    }

    const { error, authState, user } = this.service.login(this.email, this.password);

    if (error) {
      this.error = error;
      return;
    }

    if (authState && user) {
      this.router.navigate(['courses']);
    }
  }
}
