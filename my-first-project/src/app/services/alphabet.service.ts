import { Injectable, Pipe } from '@angular/core';
import { Observable, interval, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlphabetService {
  getAlphabet(): Observable<number> {
    return interval(1000).pipe(
      map((index) => index + 1),
      map((index) => index > 26 ? 1 : index)
    );
  }
  constructor() {}
}
