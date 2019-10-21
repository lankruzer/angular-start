import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  id;
  title;
  text;

  constructor() {
    console.log(this)
  }

  ngOnInit() {
    console.log('this = ', this);
  }

}
