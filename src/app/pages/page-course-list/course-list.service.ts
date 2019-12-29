import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  public MS_IN_DAY: number = 86400000;

  constructor(private http: HttpClient) {}

  getList(start, count) {
    return this.http.get(`${API_URL}/courses`, { params: { start, count } });
  }

  getListItemById(id: string) {
    return this.http.get(`${API_URL}/courses`, { params: { id } });
  }

  getListWithQuery(start, count, query) {
    return this.http.get(`${API_URL}/courses`, { params: { start, count, textFragment: query } });
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
