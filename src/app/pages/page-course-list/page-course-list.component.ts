import { Component, OnInit } from '@angular/core';
import { LinkItem } from '../../core/breadcrumbs/link-item.model';

@Component({
  selector: 'app-page-course-list',
  templateUrl: './page-course-list.component.html',
  styleUrls: ['./page-course-list.component.scss']
})
export class PageCourseListComponent implements OnInit {
  searchQuery: string = '';
  links: LinkItem[] = [
    {
      href: '/',
      text: 'Courses'
    }
  ];

  constructor() {}

  ngOnInit() {}

  onSearchSubmit = (event): void => {
    event.preventDefault();

    if (this.searchQuery.trim() === '') {
      return;
    }

    console.log('Search on submit event: ', event);
    this.searchQuery = '';
  };

  onSearchChange = (event): void => {
    console.log('Search on change value: ', event.target.value);
    this.searchQuery = event.target.value;
    console.log('Search on change searchQuery: ', this.searchQuery);
  };
}
