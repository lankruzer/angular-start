import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  searchQuery = '';
  @Output() searchSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();
  searchForm: FormGroup;

  constructor() {
    this.searchForm = new FormGroup({
      searchQuery: new FormControl(this.searchQuery, [Validators.required, Validators.minLength(3)])
    });

    this.searchForm.setValue({
      searchQuery: this.searchQuery
    });
  }

  get length() {
    return this.searchForm.get('searchQuery');
  }

  ngOnInit() {
    this.searchForm.valueChanges
      .pipe(
        debounceTime(250),
        distinctUntilChanged(),
      )
      .subscribe(({searchQuery}) => {
        if (this.searchForm.valid) {
          this.searchChange.emit(searchQuery);
        }
      });
  }

  onSearchSubmit(event): void {
    event.preventDefault();
    if (this.searchForm.valid && this.searchForm.touched) {
      this.searchSubmit.emit();
    }
  }
}
