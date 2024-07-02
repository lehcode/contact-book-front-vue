<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Contact List</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id" class="mb-2 p-2 border rounded">
        {{ contact.first_name }} {{ contact.last_name }}
        <div class="text-sm text-gray-600">
          <div v-for="phone in contact.phones" :key="phone.id">
            {{ phone.number }}
          </div>
        </div>
        <div class="mt-2">
          <router-link :to="`/edit/${contact.id}`" class="text-blue-500 mr-2">Edit</router-link>
          <button @click="deleteContact(contact.id)" class="text-red-500">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { contactState } from '../state/contactState';
import { Contact } from '../types';

export default defineComponent({
  setup() {
    const contacts = ref<Contact[]>([]);

    onMounted(() => {
      contactState.fetchContacts();
      contactState.contacts$.subscribe(newContacts => {
        contacts.value = newContacts;
      });
    });

    const deleteContact = async (id: number) => {
      if (confirm('Are you sure you want to delete this contact?')) {
        await contactState.deleteContact(id);
      }
    };

    return { contacts, deleteContact };
  }
});
</script>
