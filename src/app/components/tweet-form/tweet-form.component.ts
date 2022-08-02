import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-tweet-form',
  templateUrl: './tweet-form.component.html',
  styleUrls: ['./tweet-form.component.css']
})
export class TweetFormComponent implements OnInit {

  constructor( private store: Store<{app: any}>) { }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))
  ngOnInit(): void {
  }

}
