import { Component, Input, OnChanges } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';
import { OrderBySearchQueryPipe } from './order-by-search-query.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnChanges {
  // Куда лучше класть константы?
  public MS_IN_DAY: number = 86400000;
  pipe: any = new OrderBySearchQueryPipe();
  @Input() searchQuery: string = '';
  courseItemList: CourseListItem[] = [
    {
      id: 0,
      title: 'First course',
      creationDate: (Date.now() - this.MS_IN_DAY * 7).toString(),
      duration: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: true
    },
    {
      id: 1,
      title: 'Second course',
      creationDate: (Date.now() - this.MS_IN_DAY).toString(),
      duration: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    },
    {
      id: 2,
      title: 'Third course',
      creationDate: (Date.now() + this.MS_IN_DAY * 7).toString(),
      duration: 40,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    }
  ];
  filteredCourseItemList: CourseListItem[] = [...this.courseItemList];

  constructor() {}

  ngOnChanges() {
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
  };
}
