import { Component, OnInit } from '@angular/core';
import { LinkItem } from "../../core/breadcrumbs/link-item.model";

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent implements OnInit {
  public links : LinkItem[] = [
    {
      href: '/',
      text: 'Courses'
    },
    {
      href: '/page-not-found',
      text: 'Page not found'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
