import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoaderModule } from './shared/loader/loader.module';
import { LoaderService } from './shared/services/loader.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store/reducers/app.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './store/effects/auth.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CoursesListEffects } from './store/effects/coursesList.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    LoaderModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffects, CoursesListEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule {}
