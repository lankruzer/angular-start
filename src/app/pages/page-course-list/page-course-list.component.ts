import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-course-list',
  templateUrl: './page-course-list.component.html',
  styleUrls: ['./page-course-list.component.scss']
})
export class PageCourseListComponent implements OnInit {
  public links = [
    {
      href: '/courses',
      text: 'Courses'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
