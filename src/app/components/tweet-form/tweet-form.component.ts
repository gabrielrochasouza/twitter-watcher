import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators'
import { IStore } from 'src/app/store/app.state';

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  constructor( private store: Store<{app: IStore}>) { }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))
  ngOnInit(): void {
  }

}
