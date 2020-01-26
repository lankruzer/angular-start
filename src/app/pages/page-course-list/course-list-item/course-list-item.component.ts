import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CourseListItem } from '../course-list-item.model';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseListItemComponent implements OnInit {
  @Input() courseItem: CourseListItem;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  delete = (id: CourseListItem['id']): void => {
    this.onDelete.emit(id);
  }
}
