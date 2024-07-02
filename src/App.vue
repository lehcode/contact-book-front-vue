<template>
  <div class="container mx-auto p-4">
    <header class="mb-4">
      <h1 class="text-3xl font-bold">Contact Book</h1>
      <nav>
        <router-link to="/" class="mr-4">Home</router-link>
        <router-link to="/create">Create Contact</router-link>
      </nav>
    </header>
  </div>
  <router-view></router-view>
</template>
