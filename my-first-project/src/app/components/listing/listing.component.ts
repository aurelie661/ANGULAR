import { Component, Input } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  contacts: {  firstName: string, lastName: string, age: number, email: string,phone: string }[] = [];

  onPersonAdded(newPerson: { firstName: string, lastName: string, age: number, email: string,phone: string }) {
    this.contacts.push(newPerson);
  }
  
  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  
}
console.log();

