import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LinkItem } from '../../core/breadcrumbs/link-item.model';
import { CourseListItem } from '../page-course-list/course-list-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../page-course-list/course-list.service';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { CreateCoursesListItem, EditCoursesListItem, GetCoursesListItem } from '../../store/actions/coursesList.actions';
import { selectEditableCourseListItem } from '../../store/selectors/coursesList.selector';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-page-course-list-item-add-edit',
  templateUrl: './page-course-list-item-add-edit.component.html',
  styleUrls: ['./page-course-list-item-add-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageCourseListItemAddEditComponent implements OnInit {
  form: FormGroup;
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
    this.form = new FormGroup({
      title: new FormControl(this.course.name, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(this.course.description, [Validators.required, Validators.maxLength(500)]),
      date: new FormControl(this.course.date, [Validators.required]),
      length: new FormControl(this.course.length, [Validators.required])
    });

    this.store.select(selectEditableCourseListItem).subscribe((course: CourseListItem) => {
      this.course = {
        ...this.course,
        ...course
      };
      this.cdRef.markForCheck();

      this.form.setValue({
        title: this.course.name,
        description: this.course.description,
        date: this.course.date,
        length: this.course.length,
      });
    });

    const id = this.route.snapshot.params.id;
    if (id && id.toString() !== 'new') {
      this.isEdit = true;
      this.name = 'Edit course';
      this.store.dispatch(new GetCoursesListItem(id));
    }
  }

  ngOnInit() {}

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get date() {
    return this.form.get('date');
  }

  get length() {
    return this.form.get('length');
  }

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

    console.log('form.value = ', this.form.value);

    if (!this.form.touched || !this.form.valid) { return; }

    if (this.isEdit) {
      this.store.dispatch(new EditCoursesListItem(this.form.value));
    } else {
      this.store.dispatch(new CreateCoursesListItem(this.form.value));
    }
  }
}
