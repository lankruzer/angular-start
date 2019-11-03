import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() courseItem: CourseListItem;
  @Input() onEditCourse;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  formatDuration = (duration: number): string => {
    const hours = Math.floor(duration / 60);
    const hoursStr = hours > 0 ? hours + 'h' : '';
    const minutes = duration % 60;
    const minutesStr = minutes > 0 ? minutes + 'min' : '';
    return hoursStr + ' ' + minutesStr;
  };

  delete = (id: CourseListItem['id']): void => {
    this.onDelete.emit(id);
  };
}
