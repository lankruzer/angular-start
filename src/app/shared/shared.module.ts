import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AuthService } from './services/auth.service';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [ButtonComponent, InputComponent, FormatDurationPipe],
  providers: [AuthService, AuthGuard],
  imports: [CommonModule],
  exports: [ButtonComponent, FormatDurationPipe]
})
export class SharedModule {}
