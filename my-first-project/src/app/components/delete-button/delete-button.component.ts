import { Component,Output,EventEmitter } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.css']
})
export class DeleteButtonComponent {

  @Output()
  button = new EventEmitter<Contact>();

  deleteContact(){
    this.button.emit()
  }
}
