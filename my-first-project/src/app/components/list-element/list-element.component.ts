import { Component,Input } from '@angular/core';
import Contact from '../../models/Contact.model'

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent {
  newContact: Contact[] = []
  @Input()
  contacts: Contact[] = []

  onDelete(index: number){
    this.contacts.splice(index,1)
    // this.contacts = [...this.contacts.filter(c => c !== contact)];  
    }
  }