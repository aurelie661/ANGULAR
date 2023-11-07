import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountService {
  private counter: BehaviorSubject<number> = new BehaviorSubject(1);

  getCounter(): Observable<number> {
    return this.counter.asObservable();
  }

  incrementCounter() {
    const currentValue = this.counter.getValue();
    this.counter.next(currentValue + 1);
  }

  decrementCounter() {
    const currentValue = this.counter.getValue();
    if (currentValue != 0) {
      this.counter.next(currentValue - 1);
    } else {
    }
  }
}
