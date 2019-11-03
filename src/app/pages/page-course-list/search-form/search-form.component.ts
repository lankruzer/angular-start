import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() searchQuery: string;
  @Output() onSearchSubmit: EventEmitter<any> = new EventEmitter<any>();
  @Output() onSearchChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  searchSubmit(event): void {
    event.preventDefault();
    this.onSearchSubmit.emit();
  }

  searchChange(event): void {
    this.onSearchChange.emit(event.target.value);
  }
}
