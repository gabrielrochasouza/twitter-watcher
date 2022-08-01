import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-tweet-box',
  templateUrl: './tweet-box.component.html',
  styleUrls: ['./tweet-box.component.css']
})
export class TweetBoxComponent implements OnInit {

  constructor(private twitterService: TwitterService ) {
  }

  ngOnInit(): void {
  }




}
