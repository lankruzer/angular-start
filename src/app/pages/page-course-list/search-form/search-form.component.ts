import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, delay, distinctUntilChanged, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() searchQuery: string;
  @Output() onSearchSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter<string>();

  keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.keyUp
      .pipe(
        map(event => event.target.value),
        debounceTime(250),
        distinctUntilChanged(),
        mergeMap(search => of(search).pipe(delay(500)))
      )
      .subscribe(value => {
        if (value.length > 2) {
          this.onSearchChange.emit(value);
        }
      });
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  searchSubmit(event): void {
    event.preventDefault();
    this.onSearchSubmit.emit();
  }

  searchChange(event): void {
    this.onSearchChange.emit(event.target.value);
  }
}
