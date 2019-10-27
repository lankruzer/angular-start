import { Component, OnInit } from '@angular/core';
import { LinkItem } from "../../core/breadcrumbs/link-item.model";

@Component({
  selector: 'app-page-course-list',
  templateUrl: './page-course-list.component.html',
  styleUrls: ['./page-course-list.component.scss']
})
export class PageCourseListComponent implements OnInit {
  public searchQuery : string = '';
  public links : LinkItem[] = [
    {
      href: '/',
      text: 'Courses'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

  public onSearchSubmit = (event) : void => {
    event.preventDefault();

    if (this.searchQuery.trim() === '') {
      return;
    }

    console.log('Search on submit event: ', event);
    this.searchQuery = '';
  };

  public onSearchChange = (event) : void => {
    console.log('Search on change value: ', event.target.value);
    this.searchQuery = event.target.value;
    console.log('Search on change searchQuery: ', this.searchQuery);
  };
}
