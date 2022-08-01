import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ITweetData, ITweetsData, IUserData } from 'src/app/models/placeholder.models';
import {map} from 'rxjs/operators'
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-searched-tweets-cards',
  templateUrl: './searched-tweets-cards.component.html',
  styleUrls: ['./searched-tweets-cards.component.css']
})
export class SearchedTweetsCardsComponent implements OnInit {

  constructor(private store: Store<{app: any}>) {
  }
  userData$ = this.store.select('app').pipe(map(e=>e.searchedUserData))
  tweets$ = this.store.select('app').pipe(map(e=>e.searchedTweets))



  ngOnInit(): void {
  }
}
