import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListItemComponent } from './course-list-item.component';
import { RouterModule } from '@angular/router';
import { By } from '@angular/platform-browser';

const courseItem = {
  id: 0,
  title: 'First course',
  creationDate: '6 Nov, 2018',
  duration: 120,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid blanditiis consequatur cum dignissimos' +
    ' eius excepturi laborum minus, modi neque, quas repellendus repudiandae sequi vero. Ab dicta dolorem' +
    ' perspiciatis placeat similique.',
  topRated: true
};

describe('CourseListItemComponent', () => {
  let component: CourseListItemComponent;
  let fixture: ComponentFixture<CourseListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [CourseListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListItemComponent);
    component = fixture.componentInstance;
    component.courseItem = courseItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Emit edit course', () => {
    const spy = spyOn(component, 'edit');
    fixture.debugElement.query(By.css('.btn-edit-course')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Emit delete course', () => {
    const spy = spyOn(component, 'delete');
    fixture.debugElement.query(By.css('.btn-delete-course')).triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  });
});
