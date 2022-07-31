import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'teste-tecnico';
  public currentValue = 0

  public sum(){
    this.currentValue+=1
  }
  public subtraction(){
    this.currentValue-=1
  }
}
