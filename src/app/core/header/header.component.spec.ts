import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { LogoComponent } from './logo/logo.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent, LogoComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should render login button', () => {
    component.isAuth = false;
    fixture.detectChanges();

    const btnLogin = fixture.debugElement.query(By.css('.btn-login'));
    expect(btnLogin).toBeTruthy();
  });

  it('Emit user login', () => {
    component.isAuth = false;
    fixture.detectChanges();

    const spy = spyOn(component, 'onUserLogin');
    fixture.debugElement.query(By.css('.btn-login')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Should render logout button', () => {
    component.isAuth = true;
    fixture.detectChanges();

    const btnLogin = fixture.debugElement.query(By.css('.btn-logout'));
    expect(btnLogin).toBeTruthy();
  });

  it('Emit user logout', () => {
    component.isAuth = true;
    fixture.detectChanges();

    const spy = spyOn(component, 'onUserLogout');
    fixture.debugElement.query(By.css('.btn-logout')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
