import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  contact: Omit<Contact, 'id'> = {
    fName: '',
    lName: '',
    phoneNumber: '',
    email: ''
  };

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  addContact() {
    if (this.contact.fName && this.contact.lName && this.contact.phoneNumber) {
      this.contactService.addContact(this.contact as Contact);
      this.router.navigate(['/']);
    } else {
      alert('First name, last name, and phone number are required.');
    }
  }
}
