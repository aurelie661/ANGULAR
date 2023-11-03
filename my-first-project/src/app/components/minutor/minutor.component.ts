import { Component } from '@angular/core';

@Component({
  selector: 'app-minutor',
  templateUrl: './minutor.component.html',
  styleUrls: ['./minutor.component.css']
})
export class MinutorComponent {
  minutor=0
  interval: any
  isVisible=false

  startMinutor(){
    this.interval = setInterval(() => {
      if(this.minutor > 0){
      this.isVisible= true
      this.minutor--
        
      }
    },1000)
  }
}
