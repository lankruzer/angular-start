import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLoginComponent } from './page-login.component';
import { PageLoginRoutingModule } from './page-login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PageLoginComponent],
  imports: [CommonModule, PageLoginRoutingModule, FormsModule, ReactiveFormsModule]
})
export class PageLoginModule {}
