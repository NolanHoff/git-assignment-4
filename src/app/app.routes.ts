import { Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';

export const routes: Routes = [
  { path: '', component: ContactListComponent },
  { path: 'add', component: AddContactComponent },
  { path: 'edit/:id', component: EditContactComponent },
  { path: '**', redirectTo: '' }
];
