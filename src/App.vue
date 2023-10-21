<script setup>
import ThisMenu from '@/components/Menu.vue';
import ThisForm from './components/Form.vue';
</script>
<template>
  <v-app>
    <v-main>
      <ThisMenu />
      <v-container class="d-flex flex-column align-center" fluid>
        <h1>Profile</h1>

        <ThisForm />
      </v-container>
    </v-main>
  </v-app>
</template>
<style></style>
