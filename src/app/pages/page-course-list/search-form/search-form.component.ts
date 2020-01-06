import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { of, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit, OnDestroy {
  @Input() searchQuery: string;
  @Output() searchSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  keyUp = new Subject<KeyboardEvent>();
  private subscription: Subscription;

  constructor() {
    this.subscription = this.keyUp
      .pipe(
        map(event => (event.target as HTMLInputElement).value),
        filter(value => (value.trim().length > 2)),
        debounceTime(250),
        distinctUntilChanged(),
        mergeMap(search => of(search))
      )
      .subscribe(value => this.searchChange.emit(value));
  }

  ngOnInit() {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSearchSubmit(event): void {
    event.preventDefault();
    this.searchSubmit.emit();
  }
}
