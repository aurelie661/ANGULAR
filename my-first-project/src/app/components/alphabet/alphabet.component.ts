import { AlphabetService } from './../../services/alphabet.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css'],
})
export class AlphabetComponent implements OnInit {
  maLettre = 'A';

  constructor(private alphabetService: AlphabetService) {}

  ngOnInit(): void {
    this.alphabetService.getAlphabet().subscribe((index) =>{
      this.maLettre = String.fromCharCode(64 +index)
    })
  }
}
