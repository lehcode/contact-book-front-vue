<template>
  <div class="container mx-auto p-4">
    <h1 class="text-3xl font-bold mb-4">Contact Book</h1>
    <ContactList />
    <router-link to="/create" class="bg-blue-500 text-white px-4 py-2 rounded mt-4 inline-block">Create Contact</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactList from '../components/ContactList.vue';

export default defineComponent({
  components: {
    ContactList
  }
});
</script>
