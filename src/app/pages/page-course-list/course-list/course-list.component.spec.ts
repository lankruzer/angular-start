import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

const initialData = {
  courseItemList: [
    {
      id: 0,
      title: 'First course',
      creationDate: '6 Nov, 2018',
      duration: 120,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    },
    {
      id: 1,
      title: 'Second course',
      creationDate: '12 Nov, 2019',
      duration: 80,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
        ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem perspiciatis placeat similique.'
    }
  ]
};

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CourseListComponent, CourseListItemComponent],
      providers: [{ provide: 'initialData', useValue: initialData }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Emit load more', () => {
    const spy = spyOn(component, 'onLoadMore');
    fixture.debugElement.query(By.css('.btn-load-more')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Emit edit course', () => {
    const spy = spyOn(console, 'log');
    fixture.componentInstance.onEditCourse(1);
    expect(spy).toHaveBeenCalled();
  });

  it('Emit delete course', () => {
    const spy = spyOn(console, 'log');
    fixture.componentInstance.onDeleteCourse(1);
    expect(spy).toHaveBeenCalled();
  });
});
