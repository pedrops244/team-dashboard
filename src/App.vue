<script setup>
import ThisMenu from '@/components/Menu.vue';
import UserList from './components/UserList.vue';
</script>
<template>
  <v-app>
    <v-main>
      <ThisMenu />
      <v-container class="d-flex flex-column align-center" fluid>
        <h1>Profile users</h1>

        <UserList />
      </v-container>
    </v-main>
  </v-app>
</template>
<style></style>
