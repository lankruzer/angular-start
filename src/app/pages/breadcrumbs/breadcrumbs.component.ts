import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  links = [
    {
      href: '/courses',
      text: 'Courses'
    },
    {
      href: '/new-course',
      text: 'New course'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
