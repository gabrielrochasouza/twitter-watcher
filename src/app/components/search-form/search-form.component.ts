import { Component, OnInit } from '@angular/core';
import {setSearchedDataToStore} from '../../store/app.state'
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {

  constructor(private twitterService: TwitterService, private store: Store<{app: any}>) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  ngOnInit(): void {}

  public userNotFound: Boolean = false;

  public searchUser(event: any) {
    event.preventDefault();
    const userSearched: String = event.target[0].value;
    console.log(userSearched)
    this.twitterService.getUserAndTwittesByUsername(userSearched).subscribe({
      next: (res) => {
        const userdata = res.userdata;
        const tweets = res.data;
        this.userNotFound = false;
        const payload = {tweets:tweets , userdata:userdata}
        this.store.dispatch(setSearchedDataToStore(payload))
      },
      error: (data) => {
        this.userNotFound = true;
      },
    });
  }
}
