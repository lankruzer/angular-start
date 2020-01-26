import { IAuthor } from './author.model';

export interface CourseListItem {
  id: number;
  name: string;
  date: string;
  length: number;
  description: string;
  isTopRated: boolean;
  authors?: IAuthor[];
}
