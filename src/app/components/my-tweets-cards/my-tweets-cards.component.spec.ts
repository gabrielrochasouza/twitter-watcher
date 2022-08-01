import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTweetsCardsComponent } from './my-tweets-cards.component';

describe('MyTweetsCardsComponent', () => {
  let component: MyTweetsCardsComponent;
  let fixture: ComponentFixture<MyTweetsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTweetsCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTweetsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
