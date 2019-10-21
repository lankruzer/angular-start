import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent implements OnInit {
  courseItemList = [
    {
      id: '0',
      title: 'First course',
      text: 'Some text '
    },
    {
      id: '1',
      title: 'Second course',
      text: 'Some text'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
