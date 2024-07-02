<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Create Contact</h1>
    <ContactForm submit-button-text="Create" @submit="createContact" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import ContactForm from '../components/ContactForm.vue';
import { contactState } from '../state/contactState';
import { ContactInput, Contact } from '../types';

export default defineComponent({
  components: {
    ContactForm
  },
  setup() {
    const router = useRouter();

    const createContact = async (contact: ContactInput) => {
      await contactState.createContact(<Contact>contact);
      await router.push('/');
    };

    return { createContact };
  }
});
</script>
