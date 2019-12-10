import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login.component';
import { PageLoginRoutingModule } from './page-login-routing.module';

@NgModule({
  declarations: [PageLoginComponent],
  imports: [CommonModule, PageLoginRoutingModule]
})
export class PageLoginModule {}
