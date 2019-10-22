import {Component, Input, OnInit} from '@angular/core';
import {CourseListItem} from "../course-list-item.model";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;

  public formatDuration = (duration: number) : string => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? hours + 'h' : '';
    const minutes = duration % 60;
    const minutesStr = minutes > 0 ? minutes + 'min' : '';
    return hoursStr + ' ' + minutesStr;
  };

  constructor() { }

  ngOnInit() {
  }

}
