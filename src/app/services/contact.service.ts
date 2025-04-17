import { Injectable, signal } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../models/fake-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  // A writable signal that holds the contact list
  private _contacts = signal<Contact[]>(CONTACTS);

  // Expose a read-only version
  readonly contacts = this._contacts.asReadonly();

  getContactById(id: number): Contact | undefined {
    return this._contacts().find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    const newContact: Contact = {
      ...contact,
      id: Date.now(), // generate a simple unique id
    };
    this._contacts.update(contacts => [...contacts, newContact]);
  }

  updateContact(updated: Contact): void {
    this._contacts.update(contacts =>
      contacts.map(contact =>
        contact.id === updated.id ? updated : contact
      )
    );
  }

  deleteContact(id: number): void {
    this._contacts.update(contacts =>
      contacts.filter(contact => contact.id !== id)
    );
  }
}
