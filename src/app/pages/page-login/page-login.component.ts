import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
  private login: string;
  private password: string;
  private error: string;

  constructor(private service: AuthService, private router: Router) {}

  ngOnInit() {}

  onLoginSubmit(event) {
    event.preventDefault();
    this.error = '';
    this.service.login(this.login, this.password).subscribe(
      (isAuth) => {
        if (isAuth) {
          this.router.navigate(['courses']);
          return;
        }
      },
      ({ error }) => {
        if (error) {
          this.error = error;
          return;
        }

        this.error = 'Something went wrong, please try again';
        return;
      }
    );
  }
}
