import { Component } from '@angular/core';

@Component({
  selector: 'app-repertory',
  templateUrl: './repertory.component.html',
  styleUrls: ['./repertory.component.css'],
})
export class RepertoryComponent {
  contacts: any[] = [];
  newContact = {
    firstName: '',
    lastName: '',
    age: 0,
    email: '',
    phone: '',
  };
  
  display = false;

  addContact() {
    this.contacts.push({ ...this.newContact });
    this.newContact = {
      firstName: '',
      lastName: '',
      age: 0,
      email: '',
      phone: '',
    };
    this.display = true;
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }
}
