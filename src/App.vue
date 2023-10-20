<script setup>
import Menu from '@/components/Menu.vue';
import Form from './components/Form.vue';
</script>
<template>
  <v-app>
    <v-main>
      <Menu />
      <v-container class="d-flex flex-column align-center" fluid>
        <h1>Dashboard</h1>

        <Form />
      </v-container>
    </v-main>
  </v-app>
</template>
<style></style>
