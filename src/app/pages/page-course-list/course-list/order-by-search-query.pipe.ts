import { Pipe, PipeTransform } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Pipe({
  name: 'orderBySearchQuery'
})
export class OrderBySearchQueryPipe implements PipeTransform {
  transform(courseList: CourseListItem[], searchQuery: string, ...args: any[]): any {
    return courseList.filter(({ title }) => {
      return title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
    });
  }
}
