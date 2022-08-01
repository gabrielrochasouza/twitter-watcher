import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { TwitterService } from 'src/app/services/twitter.service';

import {IAppState, reducer} from '../../store/app.state'

@Component({
  selector: 'app-my-tweets-cards',
  templateUrl: './my-tweets-cards.component.html',
  styleUrls: ['./my-tweets-cards.component.css'],
})
export class MyTweetsCardsComponent implements OnInit {


  
  constructor(private store: Store<{app: any}>) {
  }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))
  tweets$ = this.store.select('app').pipe(map(e=>e.myTweets))


  ngOnInit() {
  }
}
