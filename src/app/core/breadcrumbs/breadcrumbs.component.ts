import { Component, Input, OnInit } from '@angular/core';
import { LinkItem } from "./link-item.model";

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() public links : LinkItem[];

  ngOnInit() { }
}
