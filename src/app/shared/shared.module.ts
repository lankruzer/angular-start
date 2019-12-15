import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AuthService } from './services/auth.service';
import { FormatDurationPipe } from './pipes/format-duration.pipe';

@NgModule({
  declarations: [ButtonComponent, InputComponent, FormatDurationPipe],
  providers: [AuthService],
  imports: [CommonModule],
  exports: [ButtonComponent, FormatDurationPipe]
})
export class SharedModule {}
