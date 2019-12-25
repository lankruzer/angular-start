import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LinkItem } from '../../core/breadcrumbs/link-item.model';
import { CourseListItem } from '../page-course-list/course-list-item.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../page-course-list/course-list.service';

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
    private cdRef: ChangeDetectorRef
  ) {
    if (
      this.route &&
      this.route.snapshot &&
      this.route.snapshot.params.id &&
      this.route.snapshot.params.id.toString() !== 'new'
    ) {
      this.isEdit = true;
      this.name = 'Edit course';
      this.courseListService
        .getListItemById(this.route.snapshot.params.id)
        .subscribe((courseList: CourseListItem[]) => {
          this.course = { ...courseList[0] };
          this.cdRef.markForCheck();
          this.links[1].text = this.course.name;
        });
    }
  }

  ngOnInit() {}

  onCancelHandle(event) {
    event.preventDefault();
    console.log('onCancelHandle');

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
      this.courseListService.editListItem(this.course).subscribe(res => {
        this.router.navigate(['/courses']);
      });
    } else {
      this.courseListService.createListItem(this.course).subscribe(res => {
        this.router.navigate(['/courses']);
      });
    }
  }
}
