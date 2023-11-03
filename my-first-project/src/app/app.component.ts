import { Component,ViewChild,ElementRef } from '@angular/core';
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
  firstVisible = false
  monTexte = "Default"
  
  @ViewChild('age') ageElementRef!: ElementRef<HTMLInputElement>

  changeTextValue(input: HTMLInputElement) {
    const textValue = input.value
    console.log(textValue);
    
    this.monTexte = textValue
  }

  

  switchFirstVisibility() {
    this.firstVisible = !this.firstVisible
  }
}
