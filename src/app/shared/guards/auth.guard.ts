import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { selectIsAuth } from '../../store/selectors/auth.selector';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  isAuth$;
  constructor(private authService: AuthService, private router: Router, private store: Store<IAppState>) {
    this.store.select(selectIsAuth).subscribe(isAuth => this.isAuth$ = isAuth);
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !this.isAuth$ ? this.router.parseUrl('/login') : true;
  }
}
