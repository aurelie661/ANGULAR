import { Subscription } from 'rxjs';
import { AlphabetService } from './../../services/alphabet.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css'],
})
export class AlphabetComponent implements OnInit, OnDestroy {
  myLetter = 'A';
  subCount!: Subscription

  constructor(private alphabetService: AlphabetService) {}

  ngOnInit(): void {
    this.subCount= this.alphabetService.getAlphabet().subscribe((index) =>{
      this.myLetter = String.fromCharCode(64 +index)
    })
  }
  ngOnDestroy(): void {
    this.subCount.unsubscribe()
  }
}
