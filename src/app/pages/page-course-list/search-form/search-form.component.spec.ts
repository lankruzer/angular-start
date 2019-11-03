import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFormComponent } from './search-form.component';
import { By } from '@angular/platform-browser';

describe('SearchFormComponent', () => {
  let component: SearchFormComponent;
  let fixture: ComponentFixture<SearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Search input change', () => {
    console.log('comp = ', component);
    const spy = spyOn(component, 'searchChange');
    fixture.debugElement.query(By.css('.input')).triggerEventHandler('input', null);
    expect(spy).toHaveBeenCalled();
  });

  it('Search form submit', () => {
    const spy = spyOn(component, 'searchSubmit');
    fixture.debugElement.query(By.css('.search-form')).triggerEventHandler('submit', null);
    expect(spy).toHaveBeenCalled();
  });
});
