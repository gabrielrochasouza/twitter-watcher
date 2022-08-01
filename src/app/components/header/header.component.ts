import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/services/twitter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private twitterService: TwitterService) {
    this.getter()
  }

  ngOnInit(): void {
  }
  getter(){
    this.twitterService.getUserByUsername().subscribe({
      next: (data)=>console.log(data),
      error: (data)=>console.log(data)
    })
  }

}
