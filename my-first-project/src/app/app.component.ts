import { Component } from '@angular/core';
import Contact from './models/Contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  modalVisible :boolean =false
  contacts: Contact[] = []
  sortingType: keyof Contact | "" = ""

  addContactHandler(contact: Contact) {
    this.contacts = [...this.contacts, contact]
  }
  clickAHandler() {
    console.log("Button A clicked!");
    this.modalVisible= true;
  }

  clickBHandler() {
    console.log("Button B clicked!");
  }

  closeModal(){
    this.modalVisible= false;
  }

  modalVisibility = ""

  changeModalVisilibty(value: string) {
    this.modalVisibility = value
  }
}
