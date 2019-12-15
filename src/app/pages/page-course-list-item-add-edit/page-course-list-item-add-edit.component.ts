import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LinkItem } from '../../core/breadcrumbs/link-item.model';
import { CourseListItem } from '../page-course-list/course-list-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-course-list-item-add-edit',
  templateUrl: './page-course-list-item-add-edit.component.html',
  styleUrls: ['./page-course-list-item-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCourseListItemAddEditComponent implements OnInit {
  links: LinkItem[] = [
    {
      href: '/',
      text: 'Courses'
    },
    {
      href: '#',
      text: 'New course'
    }
  ];

  course: CourseListItem = {
    id: null,
    title: '',
    creationDate: Date.now().toString(),
    duration: 0,
    description: '',
    topRated: false
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onCancelHandle(event) {
    event.preventDefault();
    console.log('onCancelHandle');

    const isConfirmed = window.confirm('Do you really want to leave this page?');
    if (isConfirmed) {
      this.router
        .navigate(['/'])
        .then(res => console.log('success navigate to index res = ', res))
        .catch(error => console.error('failure navigate to index error = ', error));
    }
  }

  onCourseSubmit(event) {
    event.preventDefault();

    console.log('onCourseSubmit course = ', this.course);
  }
}
