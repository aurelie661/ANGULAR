import { Component, Input } from '@angular/core';
import Contact from 'src/app/models/Contact.model';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent {

  @Input()
  contacts: Contact[] = []
  
  deleteContact(index: number) {
    this.contacts.splice(index, 1);
  }

  
}

