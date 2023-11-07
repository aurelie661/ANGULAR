import { Component } from '@angular/core';
import { CountService } from 'src/app/services/count.service';

@Component({
  selector: 'app-fizz-buzz-display',
  templateUrl: './fizz-buzz-display.component.html',
  styleUrls: ['./fizz-buzz-display.component.css']
})
export class FizzBuzzDisplayComponent {
  constructor(private countService: CountService){ 
    
  }
}
