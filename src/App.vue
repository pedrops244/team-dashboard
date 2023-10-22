<script setup>
import ThisMenu from '@/components/Menu.vue';
import ThisForm from './components/Form.vue';
import UserList from './components/UserList.vue';
</script>
<template>
  <v-app>
    <v-main>
      <ThisMenu />
      <v-container class="d-flex flex-column align-center" fluid>
        <h1>Profile</h1>

        <ThisForm />
        <v-row>
          <UserList />
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
<style></style>
