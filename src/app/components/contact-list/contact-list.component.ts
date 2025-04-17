import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../services/contact.service';
import { ContactCardComponent } from '../contact-card/contact-card.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactCardComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts = computed(() => this.contactService.contacts());

  constructor(private contactService: ContactService) {}

  onEdit(id: number) {
    // Navigate to edit route
    window.location.href = `/edit/${id}`;
  }

  onDelete(id: number) {
    this.contactService.deleteContact(id);
  }
}
