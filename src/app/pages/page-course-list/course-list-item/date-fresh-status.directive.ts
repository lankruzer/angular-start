import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appDateFreshStatus]'
})
export class DateFreshStatusDirective {
  @Input('appDateFreshStatus') public date: string;
  public MS_IN_DAY: number = 86400000;

  getColor() {
    if (+this.date < Date.now() && +this.date >= Date.now() - this.MS_IN_DAY * 14) {
      return 'green';
    }

    if (+this.date > Date.now()) {
      return '#30b6dd';
    }

    return 'white';
  }

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.element.nativeElement.style.border = `1px solid ${this.getColor()}`;
  }
}
