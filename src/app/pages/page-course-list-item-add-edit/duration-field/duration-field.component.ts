import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DurationFieldComponent),
      multi: true
    }
  ]
})
export class DurationFieldComponent implements ControlValueAccessor {
  private duration = 0;
  private isValid = true;
  private isTouched = false;

  validate({ value }: FormControl) {
    this.isValid = !!value;
    return !this.isValid && {
      invalid: true
    };
  }

  writeValue(value: any): void {
    this.duration = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(value) {
    this.duration = value;
    this.onChange(value);
    this.isTouched = true;
    this.onTouched();
  }
}
