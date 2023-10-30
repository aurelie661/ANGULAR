import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional',
  templateUrl: './conditional.component.html',
  styleUrls: ['./conditional.component.css']
})
export class ConditionalComponent {
  firstname="";
  isTrue= true;
  age=11;
  firstnames =["John","Pierre","Aurélie"];

  incrementAge(){
    this.age+=1;
    this.firstnames.push("Nouveau"+this.age);
  }
}
