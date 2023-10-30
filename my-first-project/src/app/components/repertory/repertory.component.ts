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
    newContact:{
      this.firstName ="",
      this.lastName ="",
      this.age =0,
      this.email ="",
      this.phone =""
    }
  }

  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  getStyle(index: number){
    return {
      'color': index % 2 === 0 ? 'green' : 'black'
    }
  }
  getClass(index: number){
    if((index + 1) % 3 === 0){
      return 'upper';
    }else{
      return '';
    }
  }
}
