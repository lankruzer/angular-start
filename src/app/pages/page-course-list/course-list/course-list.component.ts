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
  pipe: any = new OrderBySearchQueryPipe();
  @Input() searchQuery: string = '';
  courseItemList: CourseListItem[] = [];
  filteredCourseItemList: CourseListItem[] = [...this.courseItemList];

  constructor(private courseListService: CourseListService) {
    this.courseItemList = courseListService.getList();
  }

  ngOnChanges() {
    console.log('ngOnChanges this.courseItemList = ', this.courseItemList);
    this.filteredCourseItemList = this.pipe.transform(this.courseItemList, this.searchQuery);
  }

  onLoadMore = (): void => {
    console.log('Load more');
  };

  onEditCourse = (id: CourseListItem['id']): void => {
    console.log('Edit course id: ', id);
  };

  onDeleteCourse = (id: CourseListItem['id']): void => {
    console.log('Delete course id: ', id);
    const isConfirmed = window.confirm('Do you really want to delete this course?');

    if (isConfirmed) {
      this.courseItemList = this.courseListService.deleteListItem(id);
      this.filteredCourseItemList = this.pipe.transform(this.courseItemList, this.searchQuery);
    }
  };
}
