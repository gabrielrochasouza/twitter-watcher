import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators'
import { IStore, setMyDataToStore, setSearchedDataToStore, setShowModal } from 'src/app/store/app.state';
import { ITweetData, ITweetsData, IUserData } from 'src/app/models/placeholder.models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store: Store<{app: IStore}>) {
  }
  userData$ = this.store.select('app').pipe(map(e=>e.myUserData))

  public profileBox: Boolean = false

  public showProfileBox(){
    this.profileBox = !this.profileBox
  }

  public logout(){
    this.store.dispatch(setShowModal({showModal: true}))
    this.store.dispatch(setMyDataToStore({tweets:[] as ITweetData[], userdata: {} as IUserData}))
    this.store.dispatch(setSearchedDataToStore({tweets:[] as ITweetData[], userdata: {} as IUserData}))
    localStorage.clear()
    this.showProfileBox()
  }

  ngOnInit(): void {
  }


}
