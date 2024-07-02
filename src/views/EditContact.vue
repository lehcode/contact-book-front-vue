<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Edit Contact</h1>
    <ContactForm v-if="contact" :initial-contact="contact" submit-button-text="Update" @submit="updateContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import ContactForm from '../components/ContactForm.vue';
import { contactState } from '../state/contactState';
import { Contact } from '../types';

export default defineComponent({
  components: {
    ContactForm
  },
  setup() {
    const router = useRouter();
    const route = useRoute();
    const contact = ref<Contact | null>(null);

    onMounted(() => {
      const id = Number(route.params.id);
      contactState.contacts$.subscribe(contacts => {
        contact.value = contacts.find(c => c.id === id) || null;
      });
    });

    const updateContact = async (updatedContact: Contact) => {
      await contactState.updateContact(updatedContact);
      router.push('/');
    };

    return { contact, updateContact };
  }
});
</script>
