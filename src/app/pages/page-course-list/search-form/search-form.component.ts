import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() searchQuery: string;
  @Input() onSearchSubmit;
  @Input() onSearchChange;

  constructor() {}

  ngOnInit() {}
}
