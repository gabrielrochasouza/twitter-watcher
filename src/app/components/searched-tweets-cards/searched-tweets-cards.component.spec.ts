import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchedTweetsCardsComponent } from './searched-tweets-cards.component';

describe('SearchedTweetsCardsComponent', () => {
  let component: SearchedTweetsCardsComponent;
  let fixture: ComponentFixture<SearchedTweetsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchedTweetsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchedTweetsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
