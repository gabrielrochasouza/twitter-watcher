import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TwitterService } from 'src/app/services/twitter.service';
import {map} from 'rxjs/operators'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{app: any}>) {
  }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))

  ngOnInit(): void {
  }


}
