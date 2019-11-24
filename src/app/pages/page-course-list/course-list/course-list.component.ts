import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courseItemList: CourseListItem[] = [
    {
      id: 0,
      title: 'First course',
      creationDate: '6 Nov, 2018',
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
      creationDate: '12 Nov, 2019',
      duration: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
        ' perspiciatis placeat similique.',
      topRated: false
    }
  ];

  constructor() {}

  ngOnInit() {}

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
