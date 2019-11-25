import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {
  transform(duration: any, ...args: any[]): any {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? hours + 'h' : '';
    const minutes = duration % 60;
    const minutesStr = minutes > 0 ? minutes + 'min' : '';
    return hoursStr + ' ' + minutesStr;
  }
}
