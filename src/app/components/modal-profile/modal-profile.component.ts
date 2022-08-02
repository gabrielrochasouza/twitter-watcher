import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { TwitterService } from 'src/app/services/twitter.service';
import { IStore, setMyDataToStore, setShowModal } from 'src/app/store/app.state';
import { Store } from '@ngrx/store';
import {map} from 'rxjs/operators'



@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.css']
})
export class ModalProfileComponent implements OnInit {

  public userNotFound: Boolean = false 

  @Input()
  username:String = ''

  setUsernameValue(event: any):void{
    event.preventDefault()
    this.username = event.target[0].value
    if(this.username) this.getTweets(this.username)

  }

  constructor(private twitterService: TwitterService, private store: Store<{app: IStore}>) { 

  }

  public getTweets(username: String){
      this.twitterService.getUserAndTwittesByUsername(username).subscribe({
        next: (res)=>{
          const userdata = res.userdata
          const tweets = res.data
          this.twitterService.myTweets = tweets
          this.twitterService.hideContent = false
          localStorage.setItem('@userData', JSON.stringify(userdata))
          localStorage.setItem('@MyTweets', JSON.stringify(tweets))
          this.close()
          this.userNotFound = false
          const payload = {tweets:tweets , userdata:userdata}
          this.store.dispatch(setMyDataToStore(payload))
        },
        error: (data)=>{
          this.userNotFound = true
        }
      })
    }

  showModal$ = this.store.select('app').pipe(map(e=>e.showModal))

  public close(){
    this.store.dispatch(setShowModal({showModal: false}))
  }

  ngOnInit(): void {
  }

}
