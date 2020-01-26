import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IAuthor } from '../../page-course-list/author.model';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../shared/constants/constants';

@Component({
  selector: 'app-authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AuthorsFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AuthorsFieldComponent),
      multi: true
    }
  ]
})
export class AuthorsFieldComponent implements ControlValueAccessor {
  private authors = [];
  private isValid = true;
  private isTouched = false;
  private loadedAuthors = [];
  private filteredAuthors = [];
  private query = '';

  constructor(private http: HttpClient) {
    this.http.get(`${API_URL}/authors`).subscribe((loadedAuthors: IAuthor[]) => {
      this.loadedAuthors = loadedAuthors;
    });
  }

  changeQuery(query) {
    this.query = query;
    this.filteredAuthors = [];
    if (!query) {
      return ;
    }

    this.loadedAuthors.forEach(author => {
      if (author.name.toLowerCase().startsWith(query.toLowerCase())) {
        if (this.authors.every(currentAuthor => currentAuthor.id !== author.id)) {
          this.filteredAuthors.push(author);
        }
      }
    });
  }

  validate({ value }: FormControl) {
    this.isValid = !!value;
    return !this.isValid && {
      invalid: true
    };
  }

  writeValue(value: any): void {
    this.authors = value;
  }

  onChange: any = () => {};
  onTouched: any = () => {};

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  updateValue(value) {
    this.authors = value;
    this.onChange(value);
    this.isTouched = true;
    this.onTouched();
  }

  removeAuthor(removedAuthor: IAuthor) {
    let updatedAuthors = [...this.authors];
    updatedAuthors = updatedAuthors.filter((author) => author.id !== removedAuthor.id);
    this.updateValue(updatedAuthors);
  }

  addAuthor(addedAuthor: IAuthor) {
    this.updateValue([...this.authors, addedAuthor]);
    this.changeQuery('');
  }
}
