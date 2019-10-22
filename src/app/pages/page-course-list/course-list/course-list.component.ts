import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  public courseItemList = [
    {
      id: '0',
      title: 'First course',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    },
    {
      id: '1',
      title: 'Second course',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
