import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-field',
  templateUrl: './date-field.component.html',
  styleUrls: ['./date-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => DateFieldComponent),
      multi: true
    }
  ]
})
export class DateFieldComponent implements ControlValueAccessor {
  private date = Date.now().toString();
  private isValid = true;
  private isTouched = false;

  validate({ value }: FormControl) {
    this.isValid = !!value;
    return !this.isValid && {
      invalid: true
    };
  }

  writeValue(value: any): void {
    this.date = value;
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
    this.date = value;
    this.onChange(value);
    this.isTouched = true;
    this.onTouched();
  }
}
