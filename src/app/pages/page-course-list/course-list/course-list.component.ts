import { Component, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { CourseListService } from '../course-list.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { DeleteCoursesListItem, GetCoursesList } from '../../../store/actions/coursesList.actions';
import { selectCoursesList } from '../../../store/selectors/coursesList.selector';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnChanges {
  start = 0;
  count = 10;
  isLoadMore = false;
  @Input() searchQuery = '';
  filteredCourseItemList: any = [];

  getCoursesList() {
    this.store.dispatch(new GetCoursesList({
      start: this.start,
      count: this.count,
      query: this.searchQuery
    }));
  }

  constructor(private courseListService: CourseListService, private store: Store<IAppState>) {
    this.getCoursesList();

    this.store.select(selectCoursesList).subscribe((coursesList: CourseListItem[]) => {
      this.filteredCourseItemList = this.start === 0 ? coursesList : [...this.filteredCourseItemList, ...coursesList];
      this.isLoadMore = coursesList.length >= this.count;
    });
  }

  ngOnChanges() {
    this.start = 0;
    this.getCoursesList();
  }

  onLoadMore(): void {
    this.start += this.count;
    this.getCoursesList();
  }

  onDeleteCourse(id: CourseListItem['id']): void {
    const isConfirmed = window.confirm('Do you really want to delete this course?');
    if (isConfirmed) {
      this.store.dispatch(new DeleteCoursesListItem(id));
      this.store.dispatch(new GetCoursesList({
        start: 0,
        count: this.start + this.count,
        query: this.searchQuery
      }));
    }
  }
}
