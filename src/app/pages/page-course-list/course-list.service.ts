import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/constants/constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  coursesData = {
    list: [],
    isLoadMore: false
  };
  courses = new BehaviorSubject<object>(this.coursesData);

  constructor(private http: HttpClient) {}

  getList(start, count, query?) {
    const options = { start, count };
    this.http.get(`${API_URL}/courses`, { params: query ? {...options, textFragment: query} : options })
      .subscribe((res: Array<any>) => {
        this.courses.next({
          // @ts-ignore
          list: start === 0 ? res : [...(this.courses.value.list), ...res],
          isLoadMore: res.length >= count
        });
      });
  }

  getListItemById(id: string) {
    return this.http.get(`${API_URL}/courses`, { params: { id } });
  }

  createListItem(item: CourseListItem) {
    console.log('call createListItem');
    return this.http.post(`${API_URL}/courses`, item);
  }

  editListItem(item: CourseListItem) {
    console.log('call editListItem');
    return this.http.patch(`${API_URL}/courses/${item.id}`, item);
  }

  deleteListItem(id: number) {
    return this.http.delete(`${API_URL}/courses/${id}`);
  }
}
