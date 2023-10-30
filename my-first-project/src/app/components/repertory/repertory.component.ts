import { Component } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css'],
})
export class RepertoryComponent {
  maValeur=""
  contacts: Contact[] = [];
  firstName = ""
  lastName = ""
  age = 0
  email = ""
  phone = ""

  display = false;

  addContact() {
    const newContact = new Contact(
      this.firstName,
      this.lastName,
      this.age,
      this.email,
      this.phone
    );
    this.contacts.push(newContact);
    this.display = true;
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  getStyle(){
    return {
      'color': this.maValeur === 'i+1%2 ==0' ? 'green' : 'black'
    }
  }
}
