import { Component,Input } from '@angular/core';
import Contact from '../../models/Contact.model'

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.css']
})
export class ListElementComponent {
  @Input()
  contacts: Contact[] = []

  onDelete(index: number){
    this.contacts.splice(index,1)
  }


}
