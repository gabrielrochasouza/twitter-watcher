import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TwitterService } from 'src/app/services/twitter.service';
import {map} from 'rxjs/operators'
import { setMyDataToStore, setSearchedDataToStore, setShowModal } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{app: any}>) {
  }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))

  public profileBox: Boolean = false

  public showProfileBox(){
    this.profileBox = !this.profileBox
  }

  public logout(){
    this.store.dispatch(setShowModal({showModal: true}))
    this.store.dispatch(setMyDataToStore({tweets:[], userdata: {}}))
    this.store.dispatch(setSearchedDataToStore({tweets:[], userdata: {}}))
    localStorage.clear()
    this.showProfileBox()
  }

  ngOnInit(): void {
  }


}
