import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact!: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const foundContact = this.contactService.getContactById(id);

    if (foundContact) {
      // Clone the object to edit safely without updating until submit
      this.contact = { ...foundContact };
    } else {
      alert('Contact not found');
      this.router.navigate(['/']);
    }
  }

  updateContact() {
    if (this.contact) {
      this.contactService.updateContact(this.contact);
      this.router.navigate(['/']);
    }
  }
}
