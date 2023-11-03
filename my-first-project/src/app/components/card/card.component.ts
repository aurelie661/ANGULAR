import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Output() close = new EventEmitter()

  onClose(event: Event | undefined = undefined) {
    if (event) {
      if (event.currentTarget === event.target) {
        this.close.emit()
      }
    } else this.close.emit()
  }
}
