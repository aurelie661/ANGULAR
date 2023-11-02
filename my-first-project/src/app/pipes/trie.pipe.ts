import { Pipe, PipeTransform } from '@angular/core';
import Contact from '../models/Contact.model';

@Pipe({
  name: 'trie'
})
export class TriePipe implements PipeTransform {
  transform(value: Contact[], contactAttribute: keyof Contact | ""): Contact[] {
    if (contactAttribute === "") return value
    else return value.sort((a, b) => a[contactAttribute] < b[contactAttribute] ? -1 : 1)
  }
}
