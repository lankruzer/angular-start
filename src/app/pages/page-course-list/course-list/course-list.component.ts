import { Component, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { OrderBySearchQueryPipe } from './order-by-search-query.pipe';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnChanges {
  start = 0;
  count = 10;
  isLoadMore = false;
  pipe: any = new OrderBySearchQueryPipe();
  @Input() searchQuery = '';
  filteredCourseItemList: any = [];

  constructor(private courseListService: CourseListService) {
    courseListService.getList(this.start, this.count);
    // @ts-ignore
    this.courseListService.courses.subscribe(({ list, isLoadMore}) => {
      this.filteredCourseItemList = list;
      this.isLoadMore = isLoadMore;
    });
  }

  ngOnChanges() {
    this.courseListService.getList(this.start, this.count, this.searchQuery);
  }

  onLoadMore(): void {
    this.start += this.count;
    this.courseListService.getList(this.start, this.count);
  }

  onEditCourse(id: CourseListItem['id']): void {
    console.log('Edit course id: ', id);
  }

  onDeleteCourse(id: CourseListItem['id']): void {
    const isConfirmed = window.confirm('Do you really want to delete this course?');
    if (isConfirmed) {
      this.courseListService.deleteListItem(id).subscribe(() => {
        this.courseListService.getList(0, this.start + this.count);
      });
    }
  }
}
