<template>
  <form @submit.prevent="submitForm" class="space-y-4">
    <div>
      <label class="block">First Name:</label>
      <input v-model="contact.first_name" required class="border p-2 w-full">
    </div>
    <div>
      <label class="block">Last Name:</label>
      <input v-model="contact.last_name" required class="border p-2 w-full">
    </div>
    <div>
      <label class="block">Phones:</label>
      <div v-for="(phone, index) in contact.phones" :key="index" class="flex space-x-2 mt-2">
        <input v-model="phone.number" required class="border p-2 flex-grow">
        <button @click="removePhone(index)" type="button" class="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
      </div>
      <button @click="addPhone" type="button" class="bg-green-500 text-white px-2 py-1 rounded mt-2">Add Phone</button>
    </div>
    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">{{ submitButtonText }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';
import { Contact, ContactInput } from '../types';

export default defineComponent({
  props: {
    initialContact: {
      type: Object as PropType<Contact | null>,
      default: null
    },
    submitButtonText: {
      type: String,
      default: 'Submit'
    }
  },
  emits: ['submit'],
  setup(props, { emit }) {
    const contact = ref<ContactInput>({
      first_name: '',
      last_name: '',
      phones: [{ number: '' }]
    });

    if (props.initialContact) {
      contact.value = { ...props.initialContact, phones: [...props.initialContact.phones] };
    }

    const addPhone = () => {
      contact.value.phones.push({ number: '' });
    };

    const removePhone = (index: number) => {
      contact.value.phones.splice(index, 1);
    };

    const submitForm = () => {
      emit('submit', contact.value);
    };

    return { contact, addPhone, removePhone, submitForm };
  }
});
</script>
