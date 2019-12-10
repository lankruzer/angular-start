import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  imports: [CommonModule, PageNotFoundRoutingModule, CoreModule],
  declarations: [PageNotFoundComponent]
})
export class PageNotFoundModule {}
