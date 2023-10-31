import { Component, EventEmitter, Output } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent {
  contacts: Contact[] = [];
  firstName = ""
  lastName = ""
  age = 0
  email = ""
  phone = ""

  display = false;

  @Output('contacts')
  personAdded = new EventEmitter<{ firstName: string, lastName: string, age: number, email: string,phone: string }>();
  
  addContact() {
    const newContact = new Contact(
      this.firstName,
      this.lastName,
      this.age,
      this.email,
      this.phone
    );
    this.contacts.push(newContact);
    this.personAdded.emit(newContact);
    this.display = true;
    newContact:{
      this.firstName ="",
      this.lastName ="",
      this.age =0,
      this.email ="",
      this.phone =""
    }
  }
}
