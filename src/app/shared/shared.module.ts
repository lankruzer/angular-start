import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AuthService } from './services/auth.service';
import { FormatDurationPipe } from './pipes/format-duration.pipe';
import { AuthGuard } from './guards/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/TokenInterceptor';

@NgModule({
  declarations: [ButtonComponent, InputComponent, FormatDurationPipe],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  imports: [CommonModule],
  exports: [ButtonComponent, FormatDurationPipe]
})
export class SharedModule {}
