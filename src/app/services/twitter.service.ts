import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  public getUserAndTwittesByUsername(username: String): Observable<any>{
    return this.http.get(`https://twitter-req.herokuapp.com/api/user?username=${username}`
    )
  }
  public myTweets = [] 
  public hideContent = false

}
