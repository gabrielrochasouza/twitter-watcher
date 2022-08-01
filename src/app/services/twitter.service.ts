import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  public getUserByUsername(): Observable<any>{
    return this.http.get(`https://twitter-req.herokuapp.com/api/user?username=sommelierdebeta`
    // {headers:{'Authorization': `Bearer AAAAAAAAAAAAAAAAAAAAACqefQEAAAAA9UA77HH4oId7122yloSgffO4A0Y%3D8ceaVvsLohtrPIZxk89oimi5XN6TEiJ6S1xJAuTgSkBhuu8SJj`}}
    )
  }
  // public getTwittesByUserId():Observable<any>{
    
  // }

}
