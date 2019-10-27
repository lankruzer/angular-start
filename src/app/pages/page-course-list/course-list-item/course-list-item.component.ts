import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CourseListItem } from "../course-list-item.model";

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() public courseItem: CourseListItem;
  @Input() public onEditCourse;

  // Зачем использовать события, когда можно просто пробросить функцию?
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  public formatDuration = (duration: number) : string => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? hours + 'h' : '';
    const minutes = duration % 60;
    const minutesStr = minutes > 0 ? minutes + 'min' : '';
    return hoursStr + ' ' + minutesStr;
  };

  public delete = (id: CourseListItem["id"]) : void => {
    this.onDelete.emit(id);
  };

  constructor() { }

  ngOnInit() {
  }

}
