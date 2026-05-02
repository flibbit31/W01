import { Component } from '@angular/core';

import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  standalone: false,
  templateUrl: './contact-detail.html',
  styleUrl: './contact-detail.css',
})
export class ContactDetail {
  /*contact: Contact | null = {
    id: 3, name: "testName", email: "tn@example.com", phone: "555-555-5555", imageUrl: "", group: null
  };*/
  contact: Contact | null = null;
}
