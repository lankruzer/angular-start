import { FormatDurationPipe } from './format-duration.pipe';

describe('FormatDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe).toBeTruthy();

    it('Format duration', () => {
      const pipe = new FormatDurationPipe();
      expect(pipe.transform(100)).toBe('1h 40min');
    });
  });
});
