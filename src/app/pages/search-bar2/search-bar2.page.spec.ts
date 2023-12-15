import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBar2Page } from './search-bar2.page';

describe('SearchBar2Page', () => {
  let component: SearchBar2Page;
  let fixture: ComponentFixture<SearchBar2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SearchBar2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
