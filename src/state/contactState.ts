import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../types';
import axios from 'axios';

const API_BASE_URL = 'http://api-gateway:3000/api';

class ContactState {
  private contactsSubject = new BehaviorSubject<Contact[]>([]);
  contacts$: Observable<Contact[]> = this.contactsSubject.asObservable();

  async fetchContacts(): Promise<void> {
    try {
      const response = await axios.get<Contact[]>(`${API_BASE_URL}/contacts`);
      this.contactsSubject.next(response.data);
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  }

  async createContact(contact: Omit<Contact, 'id'>): Promise<void> {
    try {
      const response = await axios.post<Contact>(`${API_BASE_URL}/contacts`, contact);
      const currentContacts = this.contactsSubject.getValue();
      this.contactsSubject.next([...currentContacts, response.data]);
    } catch (error) {
      console.error('Failed to create contact:', error);
    }
  }

  async updateContact(contact: Contact): Promise<void> {
    try {
      const response = await axios.put<Contact>(`${API_BASE_URL}/contacts/${contact.id}`, contact);
      const currentContacts = this.contactsSubject.getValue();
      const updatedContacts = currentContacts.map(c => c.id === contact.id ? response.data : c);
      this.contactsSubject.next(updatedContacts);
    } catch (error) {
      console.error('Failed to update contact:', error);
    }
  }

  async deleteContact(id: number): Promise<void> {
    try {
      await axios.delete(`${API_BASE_URL}/contacts/${id}`);
      const currentContacts = this.contactsSubject.getValue();
      this.contactsSubject.next(currentContacts.filter(c => c.id !== id));
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  }
}

export const contactState = new ContactState();
