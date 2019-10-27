import { Component, OnInit } from '@angular/core';
import { CourseListItem } from "../course-list-item.model";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent implements OnInit {
  public courseItemList: CourseListItem[] = [
    {
      id: 0,
      title: 'First course',
      creationDate: '6 Nov, 2018',
      duration: 120,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    },
    {
      id: 1,
      title: 'Second course',
      creationDate: '12 Nov, 2019',
      duration: 80,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
