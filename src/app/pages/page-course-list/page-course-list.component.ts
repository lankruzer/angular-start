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

  onSearchSubmit = (): void => {
    if (this.searchQuery.trim() === '') {
      return;
    }
    console.log('Search on submit query: ', this.searchQuery);
    this.searchQuery = '';
  };

  onSearchChange = (query: string): void => {
    console.log('Search on change query: ', query);
    this.searchQuery = query;
    console.log('Search on change searchQuery: ', this.searchQuery);
  };
}
