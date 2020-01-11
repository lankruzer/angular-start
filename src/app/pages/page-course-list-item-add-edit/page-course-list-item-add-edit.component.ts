import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LinkItem } from '../../core/breadcrumbs/link-item.model';
import { CourseListItem } from '../page-course-list/course-list-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../page-course-list/course-list.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { CreateCoursesListItem, EditCoursesListItem, GetCoursesListItem } from '../../store/actions/coursesList.actions';
import { selectEditableCourseListItem } from '../../store/selectors/coursesList.selector';

@Component({
  selector: 'app-page-course-list-item-add-edit',
  templateUrl: './page-course-list-item-add-edit.component.html',
  styleUrls: ['./page-course-list-item-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCourseListItemAddEditComponent implements OnInit {
  isEdit: boolean = false;
  name: string = 'New course';
  course: CourseListItem = {
    id: null,
    name: '',
    date: Date.now().toString(),
    length: 0,
    description: '',
    isTopRated: false
  };
  links: LinkItem[] = [
    {
      href: '/',
      text: 'Courses'
    },
    {
      href: '#',
      text: this.isEdit ? this.course.name : 'New course'
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseListService: CourseListService,
    private cdRef: ChangeDetectorRef,
    private store: Store<IAppState>
  ) {
    this.store.select(selectEditableCourseListItem).subscribe((course: CourseListItem) => {
      this.course = {
        ...this.course,
        ...course
      };
      this.cdRef.markForCheck();
    });

    const id = this.route.snapshot.params.id;
    if (id && id.toString() !== 'new') {
      this.isEdit = true;
      this.name = 'Edit course';
      this.store.dispatch(new GetCoursesListItem(id));
    }
  }

  ngOnInit() {}

  onCancelHandle(event) {
    event.preventDefault();

    const isConfirmed = window.confirm('Do you really want to leave this page?');
    if (isConfirmed) {
      this.router
        .navigate(['/'])
        .then(res => console.log('success navigate to index res = ', res))
        .catch(error => console.error('failure navigate to index error = ', error));
    }
  }

  onCourseSubmit(event) {
    event.preventDefault();

    console.log('onCourseSubmit course = ', this.course);
    if (this.isEdit) {
      this.store.dispatch(new EditCoursesListItem(this.course));
    } else {
      this.store.dispatch(new CreateCoursesListItem(this.course));
    }
  }
}
