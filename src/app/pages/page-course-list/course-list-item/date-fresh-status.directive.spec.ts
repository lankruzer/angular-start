import { DateFreshStatusDirective } from './date-fresh-status.directive';

describe('DateFreshStatusDirective', () => {
  it('should create an instance', () => {
    const currentDate = Date.now().toString();
    const directive = new DateFreshStatusDirective();
    expect(directive).toBeTruthy();
  });
});
