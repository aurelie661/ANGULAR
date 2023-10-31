import { Component, EventEmitter, Output } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css'],
})
export class FormContactComponent {
  contacts: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
  };

  @Output('contacts')
  personAdded = new EventEmitter<Contact>();

  addContact(event: Event) {
    event.preventDefault();
    this.personAdded.emit(this.contacts);
    this.contacts = {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      email: '',
      phone: '',
    };
  }
}
