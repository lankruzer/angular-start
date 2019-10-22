import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public links = [
    {
      href: '/page-not-found',
      text: 'Page not found'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
