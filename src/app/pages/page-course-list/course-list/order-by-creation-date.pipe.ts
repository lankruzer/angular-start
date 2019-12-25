import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {
  transform(courseList: CourseListItem[], ...args: any[]): any {
    return courseList.sort((itemA, itemB) => {
      if (itemA.date === itemB.date) {
        return 0;
      }

      if (itemA.date > itemB.date) {
        return -1;
      }

      return 1;
    });
  }
}
