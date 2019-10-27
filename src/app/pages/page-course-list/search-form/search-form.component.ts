import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  @Input() public searchQuery: string;
  // Как правильно прокидывать и типизировать функции?
  @Input() public onSearchSubmit;
  @Input() public onSearchChange;

  constructor() { }

  ngOnInit() {
  }

}
