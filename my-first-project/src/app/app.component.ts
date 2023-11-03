import { Component } from '@angular/core';
import Contact from './models/Contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  contacts: Contact[] = []
  sortingType: keyof Contact | "" = ""

  addContactHandler(contact: Contact) {
    this.contacts = [...this.contacts, contact]
  }
}
