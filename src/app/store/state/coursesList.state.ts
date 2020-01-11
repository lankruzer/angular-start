import { CourseListItem } from '../../pages/page-course-list/course-list-item.model';

export interface ICoursesListState {
  coursesList: CourseListItem[];
  editableCourseListItem: CourseListItem;
  isLoadMore: boolean;
  start: number;
  count: number;
  query: string;
}

export const initialCoursesListState: ICoursesListState = {
  coursesList: [],
  isLoadMore: false,
  editableCourseListItem: null,
  start: 0,
  count: 10,
  query: ''
};
