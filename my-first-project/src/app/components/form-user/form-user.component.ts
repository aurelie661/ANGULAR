import { Component } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css'],
})
export class FormUserComponent {
  user = {
    firstname: '',
    lastname: '',
    age: 0,
  };

  onSubmit(event: Event) {
    event.preventDefault();
    console.log(this.user);
  }
}
