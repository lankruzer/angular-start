import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Pipe({
  name: 'orderByCreationDate'
})
export class OrderByCreationDatePipe implements PipeTransform {
  transform(courseList: CourseListItem[], ...args: any[]): any {
    return courseList.sort((itemA, itemB) => {
      if (itemA.creationDate === itemB.creationDate) {
        return 0;
      }

      if (itemA.creationDate > itemB.creationDate) {
        return -1;
      }

      return 1;
    });
  }
}
