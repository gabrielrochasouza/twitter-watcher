import { Component } from '@angular/core';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'teste-tecnico';
  public currentValue = 0

  constructor(private twitterService: TwitterService){
    const userData = JSON.parse(localStorage.getItem('@userData') as '') || null
    if(userData){

      this.twitterService.getUserAndTwittesByUsername(userData.username).subscribe({
        next: (res)=>{
          const usernameData = res.userdata
          const tweets = res.data
          this.twitterService.myTweets = tweets
          this.twitterService.hideContent = false
          localStorage.setItem('@userData', JSON.stringify(usernameData))
          localStorage.setItem('@MyTweets', JSON.stringify(tweets))
        },
        error: (data)=>{console.log(data)
        }
      })
    }

  }
  public hideContent: Boolean = this.twitterService.hideContent

  public sum(){
    this.currentValue+=1
  }
  public subtraction(){
    this.currentValue-=1
  }
}
