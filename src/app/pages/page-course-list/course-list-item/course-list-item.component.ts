import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() courseItem: CourseListItem;
  @Output() onEdit: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  edit = (id: CourseListItem['id']): void => {
    this.onEdit.emit(id);
  };

  delete = (id: CourseListItem['id']): void => {
    this.onDelete.emit(id);
  };
}
