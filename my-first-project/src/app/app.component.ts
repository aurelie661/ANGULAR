import { Component } from '@angular/core';
import Contact from './models/Contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  contacts: { firstName: string, lastName: string, age: number, email: string,phone: string }[] = [];

  onPersonAdded(newPerson: { firstName: string, lastName: string, age: number, email: string,phone: string }) {
    this.contacts.push(newPerson);
  }
}
