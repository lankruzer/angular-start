import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [ButtonComponent, InputComponent, AuthService],
  imports: [CommonModule],
  exports: [ButtonComponent]
})
export class SharedModule {}
